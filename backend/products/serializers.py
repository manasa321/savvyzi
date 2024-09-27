from rest_framework import serializers
from .models import Product, Seller

class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seller
        fields = ['name', 'logo', 'price', 'in_stock']

class ProductSerializer(serializers.ModelSerializer):
    sellers = SellerSerializer(many=True, read_only=True)
    best_price = serializers.SerializerMethodField()
    seller_count = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'image_url', 'processor', 'capacity', 'display_size', 'operating_system', 'sellers', 'best_price', 'seller_count']

    def get_best_price(self, obj):
        return min(seller.price for seller in obj.sellers.all()) if obj.sellers.exists() else obj.price

    def get_seller_count(self, obj):
        return obj.sellers.count()
