from .serializers import *
from rest_framework import generics
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.views import APIView
from django.contrib.auth.models import User


# Account signup view
class UserAccountSignupSerializersView(APIView):
    def post(self, request):
        signup_serializer = UserAccountSignupSerializers(data=request.data)
        signup_serializer.is_valid(raise_exception=True)
        Email = signup_serializer.validated_data['email']
        Username = signup_serializer.validated_data['username']
        
        if (User.objects.filter(email=Email).exists()):
            return Response({"Message":"An account is already signed up with the entered email. Please choose another account. Thank you :)"})
        
        if (User.objects.filter(username=Username).exists()):
            return Response({"Message":"That username is already taken. Please choose something else that best suits you :)"})
        
        hashed_password = make_password(signup_serializer.validated_data['password'])
        
        user = User.objects.create(
            first_name = signup_serializer.validated_data['first_name'],
            email = Email,
            username = Username,
            password = hashed_password
        )
        
        return Response({"Message":f"Account created successfully for {user.first_name}"})
        
    
# Account login view
class UserAccountLoginSerializersView(APIView):
    def post(self, request):
        login_serializer = UserAccountLoginSerializers(data=request.data)
        login_serializer.is_valid(raise_exception=True)
        email = login_serializer.validated_data['Email']
        password = login_serializer.validated_data['Password']
        
        if not User.objects.filter(email = email).exists():
            return Response({"Message":"User didn't found with the email provided. So sorry for your inconvenience :("})
        
        user = User.objects.get(email = email)
        
        if (check_password(password, user.password)):
            return Response({"Message":"Login successful :)"})
        
        return Response({"Message":"Invalid Credentials. So Sorry :("})