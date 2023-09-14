from django.urls import path

from apps.home import views

urlpatterns = [
    path('', views.home, name='home'),
    path('contact/', views.contact, name='contact'),
    path('terms/', views.terms, name='terms'),
]
