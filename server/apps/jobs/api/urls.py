from django.urls import path
from django.http import HttpResponse

def homeviewforjob(request):
    return HttpResponse("This is the main view of job app.")

urlpatterns = [
    path('', homeviewforjob)
]
