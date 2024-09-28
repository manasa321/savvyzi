from django.urls import path
from .views import ProductSearchView, ProductDetailView, CategoryListView

urlpatterns = [
    path('search/', ProductSearchView.as_view(), name='product-search'),
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('products/<int:product_id>/', ProductDetailView.as_view(), name='product-detail'),
]