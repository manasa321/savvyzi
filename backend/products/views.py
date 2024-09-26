from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from django.db.models import Q
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank

class ProductSearchView(APIView):
    def get(self, request):
        search_term = request.query_params.get('search', '')

        vector = SearchVector('name', weight='A') + SearchVector('description', weight='B') + SearchVector('category', weight='C')
        query = SearchQuery(search_term)

        products = Product.objects.annotate(
            rank=SearchRank(vector, query)
        ).filter(
            Q(name__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(category__icontains=search_term)
        ).order_by('-rank')

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
