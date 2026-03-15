from django.urls import include
from .views import *
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

# acounts routes
router.register('account_signup', UserAccountSignupSerializersView, basename="useraccounts")
router.register('account_login', UserAccountLoginSerializerView, basename="accountlogin")
router.register('account_modification', AccountModification, basename="modification")

# profile routes
router.register('recruiter_profile', RecruiterProfileView, basename="recruiterprofile")
# router.register('')

urlpatterns = [
    path("list_all_users_account/", AdminAccessAccountDetails.as_view(), name='AdminAccessAccountDetails'),
    path("list_all_recruiters_profile/", AdminAccessAccountRecruiterProfiles.as_view(), name='AdminAccessAccountRecruiterProfiles'),
    # path('create_account/', UserAccountSignupSerializersView.as_view(), name='UserAccountSignupSerializersView'),
    # path('login_account/', UserAccountLoginSerializersView.as_view(), name='UserAccountLoginSerializersView'),
    # path('recruiter_profile/', RecruiterProfileView.as_view(), name='RecruiterProfileView'),
    # path('seekers_profile/', SeekersProfileView.as_view(), name='SeekersProfileView'),
    
    path('', include(router.urls))
]