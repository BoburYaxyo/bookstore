from django.contrib import admin

from .models import Blog, BCategory, Post

# Register your models here.

admin.site.register([Blog, BCategory])
admin.site.register(Post)