from django.urls import path, include
from django.http import HttpResponse
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register('create-jobs', JobSerializersView, basename='jobcreation')

urlpatterns = [
    path('', include(router.urls)),
    path('list-create-jobs/', JobSerializerAdminListCreateView.as_view(), name="JobSerializerAdminListCreateView"),
    path('retrieve-update-jobs/<int:pk>/', JobSerializerAdminRetrieveUpdateView.as_view(), name="JobSerializerAdminRetrieveUpdateView"),
    path('destroy-jobs/<int:pk>/', JobSerializerAdminDestroyView.as_view(), name="JobSerializerAdminDestroyView"),
]
