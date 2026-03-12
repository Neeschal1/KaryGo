from .serializers import *
from rest_framework.views import APIView
from django.contrib.auth.models import User
from ..services.auth import UserAuth


# Account signup view
class UserAccountSignupSerializersView(APIView):
    def post(self, request):
        signup_serializer = UserAccountSignupSerializers(data=request.data)
        signup_serializer.is_valid(raise_exception=True)
        
        FirstName = signup_serializer.validated_data['first_name']
        Email = signup_serializer.validated_data['email']
        Username = signup_serializer.validated_data['username']
        Password = signup_serializer.validated_data['password']
        
        return UserAuth().signup(FirstName, Email, Username, Password)

    
# Account login view
class UserAccountLoginSerializersView(APIView):
    def post(self, request):
        login_serializer = UserAccountLoginSerializers(data=request.data)
        login_serializer.is_valid(raise_exception=True)
        
        email = login_serializer.validated_data['Email']
        password = login_serializer.validated_data['Password']
        
        return UserAuth().login(email, password)
        
        