from django.urls import path, include
from django.http import HttpResponse
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register("create_job_post", JobSerializersView, basename='jobcreation')

urlpatterns = [
    path('', include(router.urls))
]