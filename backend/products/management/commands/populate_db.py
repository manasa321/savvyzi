from django.core.management.base import BaseCommand
from products.models import Category, Product, Seller
from django.contrib.postgres.search import SearchVector

class Command(BaseCommand):
    help = 'Populate the database with sample data'

    def handle(self, *args, **kwargs):
        # Clear existing data
        Category.objects.all().delete()
        Product.objects.all().delete()
        Seller.objects.all().delete()

        # Create categories
        mobile = Category.objects.create(name='Mobile')
        laptop = Category.objects.create(name='Laptop')

        # Create products
        iphone = Product.objects.create(
            name='iPhone 13',
            description='Latest Apple smartphone with A15 Bionic chip',
            price=79900.00,
            image_url='https://example.com/iphone13.jpg',
            category=mobile,
            processor='A15 Bionic',
            capacity='128GB',
            display_size='6.1 inches',
            operating_system='iOS 15'
        )

        samsung = Product.objects.create(
            name='Samsung Galaxy S21',
            description='Flagship Android smartphone with 5G capability',
            price=69999.00,
            image_url='https://example.com/galaxys21.jpg',
            category=mobile,
            processor='Exynos 2100',
            capacity='256GB',
            display_size='6.2 inches',
            operating_system='Android 11'
        )

        macbook = Product.objects.create(
            name='MacBook Pro',
            description='Powerful laptop for professionals',
            price=129900.00,
            image_url='https://example.com/macbookpro.jpg',
            category=laptop,
            processor='M1 Pro',
            capacity='512GB',
            display_size='14 inches',
            operating_system='macOS'
        )

        # Create sellers
        Seller.objects.create(name='Amazon', logo='https://example.com/amazon-logo.png', product=iphone, price=79900.00)
        Seller.objects.create(name='Flipkart', logo='https://example.com/flipkart-logo.png', product=iphone, price=79999.00)
        Seller.objects.create(name='Croma', logo='https://example.com/croma-logo.png', product=iphone, price=80000.00, in_stock=False)

        Seller.objects.create(name='Amazon', logo='https://example.com/amazon-logo.png', product=samsung, price=69999.00)
        Seller.objects.create(name='Flipkart', logo='https://example.com/flipkart-logo.png', product=samsung, price=70000.00)
        Seller.objects.create(name='Samsung Shop', logo='https://example.com/samsung-logo.png', product=samsung, price=69999.00)

        Seller.objects.create(name='Apple Store', logo='https://example.com/apple-logo.png', product=macbook, price=129900.00)
        Seller.objects.create(name='Amazon', logo='https://example.com/amazon-logo.png', product=macbook, price=129999.00)

        # Update search vectors
        Product.objects.update(search_vector=SearchVector('name', 'description'))

        self.stdout.write(self.style.SUCCESS('Successfully populated the database'))