from django.urls import path
from django.http import HttpResponse

def homeView(request):
    return HttpResponse("This is home view of chats app. Welcome :)")

urlpatterns = [
    path('', homeView, name='homeview')
]