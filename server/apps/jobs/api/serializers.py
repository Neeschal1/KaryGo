from rest_framework import serializers
from ..models.entities import Jobs

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobs
        fields = '__all__'
        read_only_fields = ["posted_at"]