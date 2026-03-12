from django.contrib.auth.models import User
from rest_framework import serializers
from ..models.entities import Recruiter, Seeker


class UserAccountSignupSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "username", "email", "password"]
        extra_kwargs = {
            "first_name": {"required": True},
            "username": {"required": True},
            "email": {"required": True},
            "password": {"required": True, "write_only": True},
        }


class UserAccountLoginSerializers(serializers.Serializer):
    Email = serializers.EmailField()
    Password = serializers.CharField()


class RecruiterSerializers(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = [
            "ID",
            "Image",
            "Full_Name",
            "Website_or_Portfolio",
            "Location",
            "Phone",
            "Company_Name",
            "Position",
            "Industry",
        ]
        extra_kwargs = {
            "ID": {"read_only": True },
            "Image": {"required": True},
            "Full_Name": {"required": True},
            "Website_or_Portfolio": {"required": True},
            "Location": {"required": True},
            "Phone": {"required": True},
            "Company_Name": {"required": True},
            "Position": {"required": True},
            "Industry": {"required": True},
        }


class SeekerSerializers(serializers.ModelSerializer):
    class Meta:
        model = Seeker
        fields = "__all__"
