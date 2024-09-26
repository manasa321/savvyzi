from django.core.management.base import BaseCommand
from products.models import Product

class Command(BaseCommand):
    help = 'Adds sample products to the database'

    def handle(self, *args, **kwargs):
        products = [
            {
                'name': 'iPhone 13',
                'description': 'Latest Apple smartphone with A15 Bionic chip',
                'price': 79900.00,
                'image_url': 'https://example.com/iphone13.jpg',
                'website': 'Apple Store',
                'rating': 4.5,
                'delivery': 'Free delivery'
            },
            {
                'name': 'Samsung Galaxy S21',
                'description': 'Flagship Android smartphone with 5G capability',
                'price': 69999.00,
                'image_url': 'https://example.com/galaxys21.jpg',
                'website': 'Samsung Shop',
                'rating': 4.3,
                'delivery': '2-day shipping'
            },
            {
                'name': 'OnePlus 9 Pro',
                'description': 'Premium Android phone with Hasselblad camera',
                'price': 64999.00,
                'image_url': 'https://example.com/oneplus9pro.jpg',
                'website': 'OnePlus Store',
                'rating': 4.4,
                'delivery': 'Next day delivery'
            },
        ]

        for product_data in products:
            Product.objects.create(**product_data)

        self.stdout.write(self.style.SUCCESS('Successfully added sample products'))