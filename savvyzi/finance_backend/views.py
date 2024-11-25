from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
import json
from django.conf import settings
import os
from django.http import HttpResponse

@api_view(['GET'])
def home(request):
    return HttpResponse("Welcome to SavvyZi!")

def finance_data(request):
    file_path = os.path.join(settings.BASE_DIR,'finance_backend', 'data', 'finance_data.json')
    if not os.path.exists(file_path):
        return JsonResponse({'error': 'Finance data file not found'}, status=404)

    try:
        with open(file_path, 'r') as file:
            finance_data = json.load(file)
        return JsonResponse(finance_data, safe=False)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON format in finance data file'}, status=500)
    except Exception as e:
        print(f"Error reading finance data: {str(e)}")
        return JsonResponse({'error': 'Failed to fetch finance data'}, status=500)

# Create your views here.
