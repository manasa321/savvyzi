from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.postgres.search import SearchQuery, SearchRank
from django.db.models import F
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

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
            # Return a JSON response even for errors
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CategoryListView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

# Add a new view for sample data
class SampleDataView(APIView):
    def get(self, request):
        sample_data = [
            {
                "id": 1,
                "name": "iPhone 13",
                "description": "Latest Apple smartphone with A15 Bionic chip",
                "price": 79900,
                "image_url": "https://example.com/iphone13.jpg",
                "category": "Mobile",
                "processor": "A15 Bionic",
                "capacity": "128GB",
                "display_size": "6.1 inches",
                "operating_system": "iOS 15",
                "sellers": [
                    {"name": "Amazon", "logo": "https://example.com/amazon-logo.png", "price": 79900, "in_stock": True},
                    {"name": "Flipkart", "logo": "https://example.com/flipkart-logo.png", "price": 79999, "in_stock": True},
                    {"name": "Croma", "logo": "https://example.com/croma-logo.png", "price": 80000, "in_stock": False}
                ]
            },
            # Add more sample products as needed
        ]
        return Response(sample_data)