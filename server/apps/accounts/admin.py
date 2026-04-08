from django.contrib import admin
from .models.entities import Recruiter, Seeker, OTP

admin.site.register(Recruiter)
admin.site.register(Seeker)
admin.site.register(OTP)