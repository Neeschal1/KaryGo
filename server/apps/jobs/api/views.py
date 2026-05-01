from .serializers import *
from ..models.entities import Recruiter
from ..services.fetchJobs import *
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions, response, status, generics
from .pagination import *


""" Fully admin control views """
    
# Listing and creating jobs
class JobSerializerAdminListCreateView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Job.objects.all()
    serializer_class = JobSerializers
    
# Retrieve and Updating any job 
class JobSerializerAdminRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Job.objects.all()
    serializer_class = JobSerializers
    
# Destroying any job 
class JobSerializerAdminDestroyView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Job.objects.all()
    serializer_class = JobSerializers


""" Job related Views """
class JobSerializersView(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]

    # creating a new job role
    def create(self, request: any) -> response.Response:
        number_of_jobs = Job.objects.all().count()
        serializer = JobSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        recruiter_detail = Recruiter.objects.get(id=request.data["recruiter"])
        if serializer:
            job = Job.objects.create(
                recruiter=recruiter_detail,
                title=serializer.validated_data["title"],
                description=serializer.validated_data["description"],
                salary=serializer.validated_data["salary"],
                job_type=serializer.validated_data["job_type"],
                experience_level=serializer.validated_data["experience_level"],
                deadline=serializer.validated_data["deadline"],
            )
            return response.Response(
                {
                    "Message": "New job successfully added :)",
                    "Job Detail": {
                        "Job title": job.title,
                        "Posted by": recruiter_detail.Full_Name,
                    },
                    "Total Number of jobs": number_of_jobs + 1,
                },
                status=status.HTTP_201_CREATED,
            )
        return response.Response(
            {"Message": "Something went wrong! Job didn't created."},
            status=status.HTTP_408_REQUEST_TIMEOUT,
        )


    # Updating the existing job
    def update(self, request: any, pk: int) -> response.Response:
        existing_job = get_object_or_404(Job, pk=pk)
        serializer = JobSerializers(existing_job, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        if serializer:
            serializer.save()
            return response.Response(
                {
                    "Message": f"Job details updated successfully :)",
                    "Detail": serializer.data,
                }, status=status.HTTP_200_OK
            )
        return


    # Retrieving a particular job detail
    def retrieve(self, request: any, pk: int) -> response.Response:
        retrieving_job_detail = get_object_or_404(Job, pk=pk)
        serializers = JobSerializers(retrieving_job_detail)
        if serializers:
            return response.Response(
                {"Message": "Jobs fetched :)", "Details": serializers.data}, status=status.HTTP_200_OK
            )
        
            
    # Delete a job object
    def destroy(self, request: any, pk: int) -> response.Response:
        job_to_be_deleted = get_object_or_404(Job, pk=pk)
        job_to_be_deleted.delete()
        return response.Response({"Message":"Job deleted successfully :)"}, status=status.HTTP_200_OK)
    
    
    # Listing all the jobs available
    def list(self, request):
        queryset = Job.objects.all()
        
        paginator = PaginatedData()
        paginated_details = paginator.paginate_queryset(queryset, request)
        serializer = JobSerializers(paginated_details, many=True).data
        
        description = [jobs["description"] for jobs in serializer]
        matched_jobs = JobFetch()._fetch(description)
        
        return response.Response({"Message": "All jobs fetched successfully :)",  "Pages response": paginator._get_paginateddetail().data, "Data": serializer})