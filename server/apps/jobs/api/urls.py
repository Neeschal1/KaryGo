from django.urls import path, include
from django.http import HttpResponse
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register('create_jobs', JobSerializersView, basename='jobcreation')

urlpatterns = [
    path('', include(router.urls))
]
