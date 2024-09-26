from django.urls import path
from .views import ProductSearchView, ProductDetailView

urlpatterns = [
    path('search/', ProductSearchView.as_view(), name='product-search'),
    path('<int:product_id>/', ProductDetailView.as_view(), name='product-detail'),
]
