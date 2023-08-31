from django.urls import path

from apps.books import views

urlpatterns = [
    path('shop/', views.shop, name='shop'),
]
