from django.contrib.auth.models import User
from rest_framework import serializers


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