from django.contrib import admin
from .models import Category, Book, OrderItem, Rating, Review, Tags, Sizes, Cart, Wishist, Order, Classe
# Register your models here.

class OrderItemTubleinline(admin.TabularInline):
    model = OrderItem

class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderItemTubleinline]

admin.site.register(Category)
admin.site.register(Book)
admin.site.register(Classe)
admin.site.register(Tags)
admin.site.register(Sizes)
admin.site.register(Cart)
admin.site.register(Wishist)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem)
admin.site.register(Rating)
admin.site.register(Review)