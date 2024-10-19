from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from twilio.rest import Client
import os
import random

@csrf_exempt
@require_http_methods(["POST"])
def send_otp(request):
    data = json.loads(request.body)
    mobile = data.get('mobile')
    
    if not mobile:
        return JsonResponse({'error': 'Mobile number is required'}, status=400)
    
    # Generate OTP
    otp = ''.join([str(random.randint(0, 9)) for _ in range(6)])
    
    # Send OTP using Twilio
    account_sid = 'VA069c79950b64e159bb4dddc00c7a34dc'
    auth_token = os.environ.get('TWILIO_AUTH_TOKEN')
    client = Client(account_sid, auth_token)
    
    try:
        message = client.messages.create(
            body=f'Your OTP is: {otp}',
            from_=os.environ.get('TWILIO_PHONE_NUMBER'),
            to=mobile
        )
        # In a real application, you should store the OTP securely (e.g., in a database) for later verification
        return JsonResponse({'success': True, 'message': 'OTP sent successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
@require_http_methods(["POST"])
def verify_otp(request):
    data = json.loads(request.body)
    mobile = data.get('mobile')
    otp = data.get('otp')
    
    if not mobile or not otp:
        return JsonResponse({'error': 'Mobile number and OTP are required'}, status=400)
    
    # In a real application, you should verify the OTP against the stored value
    # For this example, we'll just return success
    return JsonResponse({'success': True, 'message': 'OTP verified successfully'})
