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