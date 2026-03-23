from django.db import models
from .choices import *

# Skills table
class Skill(models.Model):
    name = models.CharField(max_length=50, choices=SKILL_CHOICES, unique=True)

    def __str__(self):
        return self.name


# Job detail section
class Jobs(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    price = models.PositiveIntegerField(default=30)
    currency = models.CharField(max_length=5, choices=CURRENCY_CHOICES)
    duration_days = models.PositiveIntegerField()
    is_remote = models.BooleanField(default=False)
    skills_required = models.ManyToManyField(Skill, blank=True)
    experience_level = models.CharField(max_length=20, choices=EXPERIENCE_LEVEL_CHOICES)
    proposals_count = models.PositiveIntegerField(default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='OPEN')
    posted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title