from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from django.db.models import Q

class ProductSearchView(APIView):
    def get(self, request):
        search_term = request.query_params.get('search', '')
        products = Product.objects.filter(
            Q(name__icontains=search_term) | Q(description__icontains=search_term)
        )
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)