from django.urls import path

from apps.books import views

urlpatterns = [
    path('shop/', views.shop, name='shop'),
    path('single_book/<str:pk>/', views.singleBook, name='single-book'),
    path('wishlist/', views.wishlist, name='wishlist'),

    path('add_wish/<str:id>/', views.addWishlistView, name="add-wish"),
 
    path('remove_wish/<int:id>/', views.removeWishlistView, name="rem-wish"),
    
    path('cart/add/<int:id>/', views.cart_add, name='add-cart'),
    path('cart/item_clear/<int:id>/', views.item_clear, name='item_clear'),
    path('cart/item_increment/<int:id>/',
         views.item_increment, name='item_increment'),
    path('cart/item_decrement/<int:id>/', 
         views.item_decrement, name='item_decrement'),
    path('cart/cart_clear/', views.cart_clear, name='cart_clear'),
    path('cart/cart-detail/',views.cart_detail,name='cart'),

]
