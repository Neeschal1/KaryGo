from .views import *
from django.urls import path

urlpatterns = [
    path('create_account/', UserAccountSignupSerializersView.as_view(), name='UserAccountSignupSerializersView'),
    path('login_account/', UserAccountLoginSerializersView.as_view(), name='UserAccountLoginSerializersView'),
]
