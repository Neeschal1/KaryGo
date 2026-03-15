from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from .serializers import *
from rest_framework import viewsets
from ..services.auth import UserAuth
from rest_framework import status, generics
from rest_framework.response import Response
from ..services.recruiterProfile import RecruiterProfile
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
        return UserAuth()._updateaccount(pk, request)
        
    def retrieve(self, request, pk=None):
        return UserAuth()._retrievedata(pk)
    
    def delete(self, request, pk=None):
        return UserAuth()._deleteaccount(pk)
    
    def logout(self, request):
        return UserAuth()._logoutaccount(request)


# # Recruiter Profile View
class RecruiterProfileView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    def list(self, request):
        queryset = Recruiter.objects.all()
        serializer = RecruiterSerializers(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = RecruiterSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        if serializer:
            return RecruiterProfile()._recruiterscreateprofile(serializer, request.user)
        
    def retrieve(self, request, pk=None):
        return RecruiterProfile()._recruiterprofileretrieve(pk, request)
    
    def update(self, request, pk=None):
        return RecruiterProfile()._recruiterprofileupdate(pk, request)
    
    


# # Seeker's Profile View
# class SeekersProfileView(APIView):
#     permission_classes = [IsAuthenticated]
#     def post(self, request):
#         serializer = SeekerSerializers(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         # serializer.save(ID = request.user)
#         return Profile().SeekersProfile(serializer, request.user)
