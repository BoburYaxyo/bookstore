from django.urls import path

from apps.home import views

urlpatterns = [
    path('', views.home, name='home'),
    path('contact/', views.contact, name='contact'),
    path('terms/', views.terms, name='terms'),
    path('faqs/', views.faqs, name='faqs'),
    path('refs/', views.refs, name='refs'),
    path('about/', views.about, name='about'),
]
