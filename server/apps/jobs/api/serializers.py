from ..models.entities import Job
from rest_framework import serializers

class JobSerializers(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['recruiter', 'title', 'description', 'salary', 'job_type', 'experience_level', 'posted_at', 'deadline', 'is_active']
        extra_kwargs = {
            'recruiter': {'required': True},
            'title': {'required': True},
            'description': {'required': True},
            'salary': {'required': True},
            'job_type': {'required': True},
            'experience_level': {'required': True},
            'posted_at': {'read_only': True},
            'deadline': {'required': True},
            'is_active': {'read_only': True},
        }
  