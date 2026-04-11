from django.contrib.auth.models import User
from .serializers import *
from rest_framework import viewsets
from ..services.auth import UserAuth
from rest_framework import generics, response
from ..services.recruiterProfile import RecruiterProfile
from ..services.seekerProfile import SeekerProfile
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from drf_yasg.utils import swagger_auto_schema


""" Resources accessible to admin only """

# All users profile
class AdminAccessAccountDetails(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserAccountSignupSerializers
    
# Recruiter's profile
class AdminAccessRecruiterProfilesDetails(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    queryset = Recruiter.objects.all()
    serializer_class = RecruiterSerializers
    
class AdminAccessSeekerProfilesDetails(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    queryset = Seeker.objects.all()
    serializer_class = SeekerSerializers


""" Account views """

# Signup
class UserAccountSignupSerializersView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    @swagger_auto_schema(request_body=UserAccountLoginSerializers)
    def create(self, request):
        number_of_users = User.objects.all().count()
        signup_serializers = UserAccountSignupSerializers(data=request.data)
        if signup_serializers.is_valid(raise_exception=True):
            FirstName = signup_serializers.validated_data["first_name"]
            Email = signup_serializers.validated_data["email"]
            Username = signup_serializers.validated_data["username"]
            Password = signup_serializers.validated_data["password"]
            return UserAuth()._signup(FirstName, Email, Username, Password, number_of_users)
        

# OTP
# class OTPVerificationSerializerView(viewsets.ViewSet):
#     permission_classes = [AllowAny]
    
#     @swagger_auto_schema(request_body=OTPVerificationSerializer)
#     def create(self, request):
#         otpverification = OTPVerificationSerializer(data = request.data)
#         if otpverification.is_valid(raise_exception=True):
#             Email = otpverification.validated_data['email']
#             Otp = otpverification.validated_data['otp']
#             return UserAuth()._otp(Email, Otp)

 
# Login         
class UserAccountLoginSerializerView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    @swagger_auto_schema(request_body=UserAccountLoginSerializers)
    def create(self, request):
        serializers = UserAccountLoginSerializers(data=request.data)
        if serializers.is_valid(raise_exception=True):
            email = serializers.validated_data['Email']
            password = serializers.validated_data['Password']
            return UserAuth()._login(email, password)
        

# Modification
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


# {
# "ID":72,
#   "Image": "https://randomuser.me/api/portraits/men/32.jpg",
#   "Full_Name": "John Doe",
#   "Website_or_Portfolio": "https://johndoe.dev",
#   "Location": "Kathmandu, Nepal",
#   "Phone": "+977-9812345678",
#   "Company_Name": "TechNova Pvt. Ltd.",
#   "Position": "Senior Recruiter",
#   "Industry": "Information Technology"
# }

# Recruiter's profile
class RecruiterProfileView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    @swagger_auto_schema(request_body=UserAccountLoginSerializers)
    def create(self, request):
        serializer = RecruiterSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        userid = User.objects.get(id=request.data['ID'])
        if serializer:
            return RecruiterProfile()._recruiterscreateprofile(serializer, userid)
        
    def retrieve(self, request, pk=None):
        return RecruiterProfile()._recruiterprofileretrieve(pk, request)
    
    def update(self, request, pk=None):
        return RecruiterProfile()._recruiterprofileupdate(pk, request)
    
    def delete(self, request, pk=None):
        return RecruiterProfile()._recruiterprofiledelete(pk, request)
    
    


# Seeker's Profile View
class SeekersProfileView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    @swagger_auto_schema(request_body=UserAccountLoginSerializers)
    def create(self, request):
        serializer = SeekerSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        if serializer:
            return SeekerProfile()._seekersprofilecreate(serializer, request.user)
        
    def retrieve(self, request, pk=None):
        return SeekerProfile()._seekerprofileretrieve(request, pk)
    
    def update(self, request, pk=None):
        return SeekerProfile()._seekerprofileupdate(request, pk)
    
    def delete(self, request, pk=None):
        return SeekerProfile()._seekerprofiledelete(request, pk)