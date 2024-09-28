from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from django.contrib.postgres.search import SearchQuery, SearchRank
from django.db.models import F

class ProductSearchView(APIView):
    def get(self, request):
        search_term = request.query_params.get('search', '')
        category = request.query_params.get('category', '')

        if not search_term:
            return Response({"error": "Search term is required"}, status=400)

        query = SearchQuery(search_term)
        products = Product.objects.annotate(
            rank=SearchRank(F('search_vector'), query)
        ).filter(search_vector=query)

        if category:
            products = products.filter(category__name__iexact=category)

        products = products.order_by('-rank')
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class CategoryListView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

class ProductDetailView(APIView):
    def get(self, request, product_id):
        try:
            product = Product.objects.get(id=product_id)
            serializer = ProductSerializer(product)
            return Response(serializer.data)
        except Product.DoesNotExist:
            return Response({"error": "Product not found"}, status=404)