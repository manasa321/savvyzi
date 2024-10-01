from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ProductSearchView(APIView):
    def get(self, request):
        search_term = request.query_params.get('search', '')
        category = request.query_params.get('category', '')

        if not search_term:
            return Response({"error": "Search term is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Sample data instead of database query
            sample_products = [
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
                {
                    "id": 2,
                    "name": "Samsung Galaxy S21",
                    "description": "Flagship Android smartphone with 5G capability",
                    "price": 69999,
                    "image_url": "https://example.com/galaxys21.jpg",
                    "category": "Mobile",
                    "processor": "Exynos 2100",
                    "capacity": "256GB",
                    "display_size": "6.2 inches",
                    "operating_system": "Android 11",
                    "sellers": [
                        {"name": "Amazon", "logo": "https://example.com/amazon-logo.png", "price": 69999, "in_stock": True},
                        {"name": "Flipkart", "logo": "https://example.com/flipkart-logo.png", "price": 70000, "in_stock": True},
                        {"name": "Samsung Shop", "logo": "https://example.com/samsung-logo.png", "price": 69999, "in_stock": True}
                    ]
                }
            ]

            # Filter sample data based on search term (case-insensitive)
            filtered_products = [
                product for product in sample_products
                if search_term.lower() in product['name'].lower() or search_term.lower() in product['description'].lower()
            ]

            # Apply category filter if provided
            if category:
                filtered_products = [
                    product for product in filtered_products
                    if product['category'].lower() == category.lower()
                ]

            return Response(filtered_products)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CategoryListView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

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