from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, OfferSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Offer

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class OfferListCreateVIew(generics.ListCreateAPIView):
    serializer_class = OfferSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Offer.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class AllOfferListView(generics.ListAPIView):
    serializer_class = OfferSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Offer.objects.all()


class OfferDeleteView(generics.DestroyAPIView):
    serializer_class = OfferSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Offer.objects.filter(author=user)


class OfferEditView(generics.UpdateAPIView):
    serializer_class = OfferSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user
        return Offer.objects.filter(author=user.id)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)
