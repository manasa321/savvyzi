from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from django.db.models import Q

class ProductSearchView(APIView):
    def get(self, request):
        search_term = request.query_params.get('search', '')
        products = Product.objects.filter(
            Q(name__icontains=search_term) | 
            Q(description__icontains=search_term) |
            Q(processor__icontains=search_term) |
            Q(capacity__icontains=search_term) |
            Q(operating_system__icontains=search_term)
        )
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductDetailView(APIView):
    def get(self, request, product_id):
        try:
            product = Product.objects.get(id=product_id)
            serializer = ProductSerializer(product)
            return Response(serializer.data)
        except Product.DoesNotExist:
            return Response({"error": "Product not found"}, status=404)
