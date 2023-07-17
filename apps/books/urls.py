from django.urls import path

from apps.books import views

urlpatterns = [
    path('learn_once/', views.learn_once, name='learn-once'),
    path('from_one/', views.from_one, name='from-one'),
    path('fantasy_one/', views.fantasy_one, name='fantasy-one'),
    path('shop/', views.shop, name='shop'),
]
