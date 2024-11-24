from django.http import JsonResponse
from rest_framework.decorators import api_view
import json
from django.conf import settings
import os

@api_view(['GET'])
def finance_data(request):
    try:
        # Read the finance data from the JSON file
        file_path = os.path.join(settings.BASE_DIR, 'products', 'data', 'finance_data.json')
        with open(file_path, 'r') as file:
            finance_data = json.load(file)
        return JsonResponse(finance_data, safe=False)
    except Exception as e:
        print(f"Error reading finance data: {str(e)}")
        return JsonResponse({'error': 'Failed to fetch finance data'}, status=500)