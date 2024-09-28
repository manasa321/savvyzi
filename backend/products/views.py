from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from django.contrib.postgres.search import SearchQuery, SearchRank
from django.db.models import F
from rest_framework import status

class ProductSearchView(APIView):
    def get(self, request):
        search_term = request.query_params.get('search', '')
        category = request.query_params.get('category', '')

        if not search_term:
            return Response({"error": "Search term is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            query = SearchQuery(search_term)
            products = Product.objects.annotate(
                rank=SearchRank(F('search_vector'), query)
            ).filter(search_vector=query)

            if category:
                products = products.filter(category__name__iexact=category)

            products = products.order_by('-rank')
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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
            return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)