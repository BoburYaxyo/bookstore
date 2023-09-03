from django.urls import path

from apps.books import views

urlpatterns = [
    path('shop/', views.shop, name='shop'),
    path('cart/', views.cart, name='cart'),
    path('single_book/<str:pk>/', views.singleBook, name='single-book'),
    path('wishlist/', views.wishlist, name='wishlist'),
    path('add_cart/<str:id>/', views.addCartView, name="add-cart"),
    path('add_wish/<str:id>/', views.addWishlistView, name="add-wish"),
    path('remove_cart/<int:id>/', views.removeCartView, name="rem-cart"),
    path('remove_wish/<int:id>/', views.removeWishlistView, name="rem-wish"),
]
