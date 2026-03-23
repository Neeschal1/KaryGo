from rest_framework import viewsets, permissions, response
from ..models.entities import Jobs
from .serializers import *


class JobSerializersView(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    
    def create(self, request):
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            Jobs.objects.create(**serializer.validated_data)
            return response.Response({"Message":"Your new job posting has been successfully created :)"})