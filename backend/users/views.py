from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, filters
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from django_ratelimit.decorators import ratelimit

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'email']

    @ratelimit(key='ip', rate='5/m', method='POST', block=True)
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
