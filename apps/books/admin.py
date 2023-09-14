from django.contrib import admin
from .models import Category, Book, Rating, Review, Tags, Sizes, Cart, Wishist, Order, Classe
# Register your models here.

admin.site.register(Category)
admin.site.register(Book)
admin.site.register(Classe)
admin.site.register(Tags)
admin.site.register(Sizes)
admin.site.register(Cart)
admin.site.register(Wishist)
admin.site.register(Order)
admin.site.register(Rating)
admin.site.register(Review)