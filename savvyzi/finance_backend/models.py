from django.db import models
from django.contrib.auth.models import User  # Import the User model

class WalletBalance(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)  # Create a one-to-one relationship with User
    balance = models.IntegerField(default=0)  # Set a default balance

    def __str__(self):
        return f"{self.user.username}'s Wallet: {self.balance}"
