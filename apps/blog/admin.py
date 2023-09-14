from django.contrib import admin

from .models import Blog, BCategory, Classes, Post

# Register your models here.

admin.site.register([Blog, BCategory, Classes])
admin.site.register(Post)