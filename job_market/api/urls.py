from django.urls import path
from . import views

urlpatterns = [
    path('offers/', views.AllOfferListView.as_view(), name='offer-list'),
    path('my_offers/', views.OfferListCreateVIew.as_view(), name='my-offer'),
    path('offer/delete/<int:pk>/', views.OfferDeleteView.as_view(), name='delete-offer'),
    path('offer/edit/<int:pk>/', views.OfferEditView.as_view(), name='edit-offer'),
]