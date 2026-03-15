from ..models.entities import Recruiter, Seeker
from rest_framework.response import Response

class Profile:
    def _RecruitersProfile(self, serializer, user):
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
        return Response({"Message":f"Profile created for: {recruiter.Full_Name}"})

    def _SeekersProfile(self, serializer, user):
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
        return Response({"Message":f"Profile created for: {seeker.Full_Name}"})
