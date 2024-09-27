from rest_framework import serializers
from .models import Product, Seller, Category

class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seller
        fields = ['name', 'logo', 'price', 'in_stock']

class ProductSerializer(serializers.ModelSerializer):
    sellers = SellerSerializer(many=True, read_only=True)
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'image_url', 'category', 'processor', 'capacity', 'display_size', 'operating_system', 'sellers']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']