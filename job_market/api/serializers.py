from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Offer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['id', 'title', 'content', 'author', 'created_at', 'category']
        extra_kwargs = {"author": {"read_only": True}}
