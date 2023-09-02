from django.contrib import admin
from .models import Category, Book, Tags, Sizes, Cart, Wishist
# Register your models here.

admin.site.register(Category)
admin.site.register(Book)
admin.site.register(Tags)
admin.site.register(Sizes)
admin.site.register(Cart)
admin.site.register(Wishist)