from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.URLField()
    processor = models.CharField(max_length=100)
    capacity = models.CharField(max_length=50)
    display_size = models.CharField(max_length=50)
    operating_system = models.CharField(max_length=50)

class Seller(models.Model):
    name = models.CharField(max_length=100)
    logo = models.URLField()
    product = models.ForeignKey(Product, related_name='sellers', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    in_stock = models.BooleanField(default=True)
