from django.db import models
from ...accounts.models.entities import Recruiter

JOBTYPE_CHOICE = (
    ("full_time", "Full Time"),
    ("part_time", "Part Time"),
    ("internship", "Internship"),
    ("remote", "Remote"),
)

EXPERIENCE_LEVEL_CHOICE = (
    ("junior", "Junior"), 
    ("mid", "Mid Level"), 
    ("senior", "Senior")
)

class Job(models.Model):
    recruiter = models.ForeignKey(Recruiter, on_delete=models.CASCADE, related_name="jobs")
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    salary = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    job_type = models.CharField(max_length=50, choices=JOBTYPE_CHOICE,)
    experience_level = models.CharField(max_length=50, choices=EXPERIENCE_LEVEL_CHOICE)
    posted_at = models.DateTimeField(auto_now_add=True)
    deadline = models.DateField(null=True, blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
