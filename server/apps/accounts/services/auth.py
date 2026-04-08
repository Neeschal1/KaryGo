import random
from env_config import Config
from django.core.mail import send_mail
from ..api.serializers import *
from ..models.entities import *
from .email_modifications import emailwall
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status

class UserAuth:
    # Login an account
    def _login(self, email: str, password: str) -> Response:
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
    def _signup(self, firstname: str, email: str, username: str, password: str, number_of_users: int) -> Response:
        if (User.objects.filter(email=email).exists()):
            return Response({"Message":"An account is already signed up with the entered email. Please choose another account. Thank you :)"})
        
        if (User.objects.filter(username=username).exists()):
            return Response({"Message":"That username is already taken. Please choose something else that best suits you :)"})
        
        user = User.objects.create(
            first_name = firstname,
            email = email,
            username = username,
            password = make_password(password),
            is_active = False
        )
        
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)
        
        randominteger = random.randint(100000, 999999)
        OTP.objects.create(email = user, otp = randominteger)
        
        subject = "🚀 Welcome to KaryGo! Verify Your Email to Get Started"
        message = "HTML Testing..."
        from_email = Config.EMAIL_FROM
        recipient_list = [user.email]
        htmlmessage = emailwall(firstname, randominteger)
        send_mail(subject, message, from_email, recipient_list, fail_silently=False, html_message=htmlmessage)
    
        if not user:
            return Response({"Message":"User's account not created. Please try again later :("})
            
        return Response({"Message":{"Account Detail": f"Account created successfully for {user.first_name}", "Tokens": {"accesstoken":access_token, "refreshtoken": refresh_token}}, "Total number of users": number_of_users}, status = status.HTTP_201_CREATED)
    
    
    
    # otp
    def _otp(self, email: str, otp: int) -> Response:
        try:
            user = User.objects.get(email = email)
        except User.DoesNotExist:
            return Response({"Message":"User doesnot exists. Please create an account first in order to continue :("})
        
        if user:
            otp_from_db = OTP.objects.filter(email = email, otp = otp).first()
            
        if not otp_from_db:
            return Response({"Message":"OTP didn't matched. You are not verified. Sorry :("})
        
        user.is_active = True
        user.save()
        otp_from_db.delete()
        
        return Response({"Message":"You are now verified :)"})

    
    
    # Updating the current account
    def _updateaccount(self, pk: int, request) -> Response:
        user_detail = get_object_or_404(User, pk=pk)
        update_serializer = UserAccountSignupSerializers(user_detail, data=request.data, partial=True)
        if update_serializer.is_valid(raise_exception=True):
            update_serializer.save()
            return Response({"Details":{"Message":"Account updated successfully :)", "Data:":update_serializer.data}})
     
    
    
    # Retrieving user's account detail
    def _retrievedata(self, pk: int, response) -> Response:
        user = get_object_or_404(User, pk=pk)
        serializer = UserAccountSignupSerializers(user)
        return Response(serializer.data)
    
    
    
    # Deleting user's account
    def _deleteaccount(self, pk) -> Response:
        user = get_object_or_404(User, pk=pk)
        user.delete()
        return Response({"Message": "Account deleted successfully :)"},status=status.HTTP_204_NO_CONTENT)
    
    
    
    # Logging out from an account
    def _logoutaccount(self, request) -> Response:
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
            