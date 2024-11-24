from django.urls import path
from . import views

urlpatterns = [
    # ... keep existing code
    path('finance/', views.finance_data, name='finance-data'),
]