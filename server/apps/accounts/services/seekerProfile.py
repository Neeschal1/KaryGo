from ..models.entities import Seeker
from ..api.serializers import *
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from ..models.entities import Seeker

class SeekerProfile:
    
    # Create seeker's profile
    def _seekersprofilecreate(self, serializer, user):
        seeker = Seeker.objects.create(
            ID = user,
            Image = serializer.validated_data["Image"],
            Full_Name = serializer.validated_data["Full_Name"],
            Website_or_Portfolio = serializer.validated_data["Website_or_Portfolio"],
            Location = serializer.validated_data["Location"],
            Phone = serializer.validated_data["Phone"],
            Resume = serializer.validated_data["Resume"],
            Skills = serializer.validated_data["Skills"],
            Experience = serializer.validated_data["Experience"],
            Education = serializer.validated_data["Education"],
        )
        return Response({"Message":f"Profile created for: {seeker.Full_Name}"}, status=status.HTTP_201_CREATED)
    
    
    
    # Retrieve seeker's existing profile
    def _seekerprofileretrieve(self, request, pk):
        user = get_object_or_404(Seeker, ID=pk)
        serializer = SeekerSerializers(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        return Response({"Detail": serializer.data}, status=status.HTTP_200_OK)
        
        
        
    # Update seeker's existing profile
    def _seekerprofileupdate(self, request, pk):
        user = get_object_or_404(Seeker, ID=pk)
        serializer = SeekerSerializers(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        if serializer:
            serializer.save()
            return Response({"Details": {"Message":"Account updated successfully :)", "Detail": serializer.data}}, status=status.HTTP_200_OK)
        
    
    
    # Delete seeker's existing profile
    def _seekerprofiledelete(self, request, pk):
        user = get_object_or_404(Seeker, ID=pk)
        user.delete()
        return Response({"Message":"ID deleted successfully :)"}, status=status.HTTP_204_NO_CONTENT)