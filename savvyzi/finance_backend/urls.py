from django.urls import path
from . import views

urlpatterns = [
    # ... keep existing code
    path('', views.finance_data, name='finance-data'),
]
