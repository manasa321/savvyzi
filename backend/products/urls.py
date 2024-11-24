from django.urls import path
from . import views

urlpatterns = [
    path('finance/', views.finance_data, name='finance-data'),
]