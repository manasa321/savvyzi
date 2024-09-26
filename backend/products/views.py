from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank

class ProductSearchView(APIView):
    def get(self, request):
        search_term = request.query_params.get('search', '')
        category = request.query_params.get('category', '')

        vector = SearchVector('name', weight='A') + SearchVector('description', weight='B')
        query = SearchQuery(search_term)

        products = Product.objects.annotate(
            rank=SearchRank(vector, query)
        ).filter(rank__gte=0.1)

        if category:
            products = products.filter(category__iexact=category)

        products = products.order_by('-rank')

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
