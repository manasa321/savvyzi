from django.urls import path
from .views import ProductSearchView, ProductDetailView, CategoryListView, SampleDataView

urlpatterns = [
    path('search/', ProductSearchView.as_view(), name='product-search'),
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('products/<int:product_id>/', ProductDetailView.as_view(), name='product-detail'),
    path('sample-data/', SampleDataView.as_view(), name='sample-data'),
]