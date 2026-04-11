from django.urls import path, include
from django.http import HttpResponse
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register('create_jobs', JobSerializersView, basename='jobcreation')

urlpatterns = [
    path('', include(router.urls)),
    path('list_create_jobs/', JobSerializerAdminListCreateView.as_view(), name="JobSerializerAdminListCreateView"),
    path('retrieve_update_jobs/<int:pk>/', JobSerializerAdminRetrieveUpdateView.as_view(), name="JobSerializerAdminRetrieveUpdateView"),
    path('destroy_jobs/<int:pk>/', JobSerializerAdminDestroyView.as_view(), name="JobSerializerAdminDestroyView"),
]
