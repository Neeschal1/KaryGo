from ..models.entities import Recruiter, Seeker
from ..api.serializers import *
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status

class RecruiterProfile:
    
    # Create recruiter's profile
    def _recruiterscreateprofile(self, serializer, user):
        recruiter = Recruiter.objects.create(
            ID = user,
            Image = serializer.validated_data["Image"],
            Full_Name = serializer.validated_data["Full_Name"],
            Website_or_Portfolio = serializer.validated_data["Website_or_Portfolio"],
            Location = serializer.validated_data["Location"],
            Phone = serializer.validated_data["Phone"],
            Company_Name = serializer.validated_data["Company_Name"],
            Position = serializer.validated_data["Position"],
            Industry = serializer.validated_data["Industry"],
        )
        return Response({"Message":f"Profile created for: {recruiter.Full_Name}"}, status=status.HTTP_201_CREATED)
    
    
    def _recruiterprofileretrieve(self, pk, request):
        user = get_object_or_404(Recruiter, ID=pk)
        serializer = RecruiterSerializers(user)
        return Response({"Message":{"Data":serializer.data}})
    
    
    # Update recruiter's existing profile
    def _recruiterprofileupdate(self, pk, request):
        user = get_object_or_404(Recruiter, ID=pk)
        user_serializer = RecruiterSerializers(user, data=request.data, partial=True)
        user_serializer.is_valid(raise_exception=True)
        if user_serializer:
            user_serializer.save()
            return Response({"Detail":{"Message":f"{user}'s account updated successfully :)", "Data":user_serializer.data}}, status=status.HTTP_200_OK)
        
    
    # Delete recruiter's existing profile
    def _recruiterprofiledelete(self, pk, request):
        user = get_object_or_404(Recruiter, ID=pk)
        user.delete()
        return Response({"Message":"ID deleted successfully :)"})
    
    
    

