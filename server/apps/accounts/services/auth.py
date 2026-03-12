from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

class UserAuth:
    FirstName: str
    Email: str
    Username: str
    Password: str

    def __init__(self, first_name=None, username=None, email=None, password=None):
        self.Email = email
        self.FirstName = first_name
        self.Username = username
        self.Password = password
        
    # Login an account
    def login(self, email, password):
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
    def signup(self, firstname, email, username, password):
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
        return Response({"Message":f"Account created successfully for {user.first_name}"})
