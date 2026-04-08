from django.db import models
from django.contrib.auth.models import User


# Otp verification
class OTP(models.Model):
    email = models.OneToOneField(User, on_delete=models.CASCADE)
    otp = models.IntegerField(blank=False)
    
    def __str__(self):
        return self.email


# Base class for both Recruiter and Job Seeker
class Base(models.Model):
    ID = models.OneToOneField(User, on_delete=models.CASCADE)
    Image = models.URLField(default="https://i.pinimg.com/736x/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg")
    Full_Name = models.CharField(default="Max Joel")
    Website_or_Portfolio = models.URLField(blank=False)
    Location = models.CharField(max_length=100, blank=False)
    Phone = models.CharField(max_length=20, blank=False)
    
    class Meta:
        abstract = True
    

# Recruiter's Profile Model
class Recruiter(Base):
    Company_Name = models.CharField(max_length=255, blank=True)
    Position = models.CharField(max_length=100, blank=False)
    Industry = models.CharField(max_length=100, blank=False)
    
    def __str__(self):
        return f"{self.Full_Name} | {self.Company_Name}"
    
    
# Job Seeker's Profile Model
class Seeker(Base):
    Resume = models.URLField(blank=True)
    Skills = models.CharField(max_length=255, blank=False)
    Experience = models.TextField(blank=False)
    Education = models.TextField(blank=False)
    
    def __str__(self):
        return self.Full_Name