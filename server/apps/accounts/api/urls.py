from django.urls import include
from .views import *
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

# acounts routes
router.register('account_signup', UserAccountSignupSerializersView, basename="useraccounts")
router.register('account_otp', OTPVerificationSerializerView, basename="userotp")
router.register('account_login', UserAccountLoginSerializerView, basename="accountlogin")
router.register('account_modification', AccountModification, basename="modification")

# profile routes
router.register('recruiter_profile', RecruiterProfileView, basename="recruiterprofile")
router.register('seeker_profile', SeekersProfileView, basename="seekerprofile")

urlpatterns = [
    path("list_all_users_account/", AdminAccessAccountDetails.as_view(), name='AdminAccessAccountDetails'),
    path("list_all_recruiters_profile/", AdminAccessRecruiterProfilesDetails.as_view(), name='AdminAccessRecruiterProfilesDetails'),
    path("list_all_seekers_profile/", AdminAccessSeekerProfilesDetails.as_view(), name='AdminAccessSeekerProfilesDetails'),
    path('', include(router.urls))
]