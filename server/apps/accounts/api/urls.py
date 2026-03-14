from django.urls import include
from .views import *
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('account', UserAccountSignup, basename="useraccounts")
# router.register('')

urlpatterns = [
    # path('create_account/', UserAccountSignupSerializersView.as_view(), name='UserAccountSignupSerializersView'),
    # path('login_account/', UserAccountLoginSerializersView.as_view(), name='UserAccountLoginSerializersView'),
    # path('recruiter_profile/', RecruiterProfileView.as_view(), name='RecruiterProfileView'),
    # path('seekers_profile/', SeekersProfileView.as_view(), name='SeekersProfileView'),
    
    path('', include(router.urls))
]