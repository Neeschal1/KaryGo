from ..api.serializers import *
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.response import Response
from rest_framework.validators import ValidationError
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status

class UserAuth:
    # Login an account
    def _login(self, email, password):
        if not User.objects.filter(email = email).exists():
            return Response({"Message":"User didn't found with the email provided. So sorry for your inconvenience :("})
        user = User.objects.get(email = email)
        
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)
        
        if (check_password(password, user.password)):
            return Response({"Message":"Login successful :)", "Tokens": {
                "accesstoken": access_token,
                "refreshtoken": refresh_token
            }})
        
        return Response({"Message":"Invalid Credentials. So Sorry :("})
    
    
    
    # Signing up a new account
    def _signup(self, firstname, email, username, password, number_of_users):
        if (User.objects.filter(email=email).exists()):
            return Response({"Message":"An account is already signed up with the entered email. Please choose another account. Thank you :)"})
        
        if (User.objects.filter(username=username).exists()):
            return Response({"Message":"That username is already taken. Please choose something else that best suits you :)"})
        
        user = User.objects.create(
            first_name = firstname,
            email = email,
            username = username,
            password = make_password(password)
        )
        
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)
        
        if not user:
            return Response({"Message":"User's account not created. Please try again later :("})
            
        return Response({"Message":{"Account Detail": f"Account created successfully for {user.first_name}", "Tokens": {"accesstoken":access_token, "refreshtoken": refresh_token}}, "Total number of users": number_of_users}, status = status.HTTP_201_CREATED)
    
    
    
    # Updating the current account
    def _updateaccount(self, pk, request):
        user_detail = get_object_or_404(User, pk=pk)
        update_serializer = UserAccountSignupSerializers(user_detail, data=request.data, partial=True)
        if update_serializer.is_valid(raise_exception=True):
            update_serializer.save()
            return Response({"Details":{"Message":"Account updated successfully :)", "Data:":update_serializer.data}})
     
    
    
    # Retrieving user's account detail
    def _retrievedata(self, pk):
        user = get_object_or_404(User, pk=pk)
        serializer = UserAccountSignupSerializers(user)
        return Response(serializer.data)
    
    
    
    # Deleting user's account
    def _deleteaccount(self, pk):
        user = get_object_or_404(User, pk=pk)
        user.delete()
        return Response({"Message": "Account deleted successfully :)"},status=status.HTTP_204_NO_CONTENT)
    
    
    
    # Logging out from an account
    def _logoutaccount(self, request):
        refresh_token = request.data.get("refreshtoken")
        if refresh_token:
            try:
                token = RefreshToken(refresh_token)
                token.blacklist()
                return Response({"Message":"Log out successful :)"}, status=status.HTTP_200_OK)
            except Exception as err:
                return Response({"Message": "Invalid token!"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"Message":"Refresh token required!"}, status=status.HTTP_404_NOT_FOUND)
            