from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.URLField()
    website = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    delivery = models.CharField(max_length=50)

    def __str__(self):
        return self.name