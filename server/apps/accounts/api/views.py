from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from .serializers import *
from rest_framework import viewsets
from ..services.auth import UserAuth
from rest_framework import status, generics
from rest_framework.response import Response
from ..services.profile import Profile
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser


# Resources accessible to admin only
class AdminAccessResources(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserAccountSignupSerializers


# Account signup view
class UserAccountSignupSerializersView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    def create(self, request):
        number_of_users = User.objects.all().count()
        signup_serializers = UserAccountSignupSerializers(data=request.data)
        if signup_serializers.is_valid(raise_exception=True):
            FirstName = signup_serializers.validated_data["first_name"]
            Email = signup_serializers.validated_data["email"]
            Username = signup_serializers.validated_data["username"]
            Password = signup_serializers.validated_data["password"]
            return UserAuth()._signup(FirstName, Email, Username, Password, number_of_users)

 
# Account login view           
class UserAccountLoginSerializerView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    def create(self, request):
        serializers = UserAccountLoginSerializers(data=request.data)
        if serializers.is_valid(raise_exception=True):
            email = serializers.validated_data['Email']
            password = serializers.validated_data['Password']
            return UserAuth()._login(email, password)
        

# Account modification view
class AccountModification(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    
    def update(self, request, pk=None):
        user_detail = get_object_or_404(User, pk=pk)
        update_serializer = UserAccountSignupSerializers(user_detail, data=request.data, partial=True)
        if update_serializer.is_valid(raise_exception=True):
            update_serializer.save()
            return Response({"Details":{"Message":"Account updated successfully :)", "Data:":update_serializer.data}})
        
    def retrieve(self, request, pk=None):
        user = get_object_or_404(User, pk=pk)
        serializer = UserAccountSignupSerializers(user)
        return Response(serializer.data)
    
    def delete(self, request, pk=None):
        user = get_object_or_404(User, pk=pk)
        user.delete()
        return Response(user.data)
               

"""
{
    "first_name": "Samikshya Pokharel",
    "username": "samy",
    "email": "samy@gmail.com",
    "password": "samy123"
}
{
    "first_name": "Susmita Pokharel",
    "username": "susi",
    "email": "susi@gmail.com",
    "password": "bsusi123"
}
"""

# Account signup view
# class UserAccountSignupSerializersView(APIView):
#     permission_classes = [AllowAny]
#     def post(self, request):
#         signup_serializer = UserAccountSignupSerializers(data=request.data)
#         signup_serializer.is_valid(raise_exception=True)

        # FirstName = signup_serializer.validated_data["first_name"]
        # Email = signup_serializer.validated_data["email"]
        # Username = signup_serializer.validated_data["username"]
        # Password = signup_serializer.validated_data["password"]

#         return UserAuth().signup(FirstName, Email, Username, Password)


# Account login view
# class UserAccountLoginSerializersView(APIView):
#     permission_classes = [AllowAny]
#     def post(self, request):
#         login_serializer = UserAccountLoginSerializers(data=request.data)
#         login_serializer.is_valid(raise_exception=True)

#         email = login_serializer.validated_data["Email"]
#         password = login_serializer.validated_data["Password"]

#         return UserAuth().login(email, password)


# # Recruiter Profile View
# class RecruiterProfileView(APIView):
#     permission_classes = [IsAuthenticated]
#     def post(self, request):
#         serializer = RecruiterSerializers(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         return Profile().RecruitersProfile(serializer, request.user)


# # Seeker's Profile View
# class SeekersProfileView(APIView):
#     permission_classes = [IsAuthenticated]
#     def post(self, request):
#         serializer = SeekerSerializers(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         # serializer.save(ID = request.user)
#         return Profile().SeekersProfile(serializer, request.user)
