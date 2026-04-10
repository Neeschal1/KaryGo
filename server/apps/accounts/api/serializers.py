from django.contrib.auth.models import User
from rest_framework import serializers
from ..models.entities import Recruiter, Seeker, OTP


# Account signup serializer
class UserAccountSignupSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "username", "email", "password", "is_active"]
        extra_kwargs = {
            "id": {"read_only": True},
            "first_name": {"required": True},
            "username": {"required": True},
            "email": {"required": True},
            "password": {"required": True, "write_only": True},
            "is_active" : {"read_only": True}
        }
        
# OTP verification serializer
# class OTPVerificationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OTP
#         fields = ['email', 'otp']
#         extra_kwargs = {
#             'email' : {'required': True},
#             'otp' : {'required': True},
#         }


# Account login serializer
class UserAccountLoginSerializers(serializers.Serializer):
    Email = serializers.EmailField()
    Password = serializers.CharField(style={'input_type': 'password'})


# Recruiter's Profile serializer
class RecruiterSerializers(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = [
            "ID",
            "Image",
            "Full_Name",
            "Website_or_Portfolio",
            "Location",
            "Phone",
            "Company_Name",
            "Position",
            "Industry",
        ]
        extra_kwargs = {
            "ID": {"read_only": True },
            "Image": {"required": False},
            "Full_Name": {"required": True},
            "Website_or_Portfolio": {"required": True},
            "Location": {"required": True},
            "Phone": {"required": True},
            "Company_Name": {"required": True},
            "Position": {"required": True},
            "Industry": {"required": True},
        }


# Seeker's Profile serializer
class SeekerSerializers(serializers.ModelSerializer):
    class Meta:
        model = Seeker
        fields = ["ID", "Website_or_Portfolio", "Full_Name", "Image", "Location", "Phone", "Resume", "Skills", "Experience", "Education"]
        extra_kwargs = {
            "ID": {"read_only": True},
            "Image": {"required": True},
            "Full_Name": {"required": True},
            "Website_or_Portfolio": {"required": True},
            "Location": {"required": True},
            "Phone": {"required": True},
            "Resume": {"required": True},
            "Skills": {"required": True},
            "Experience": {"required": True},
            "Education": {"required": True},
        }

