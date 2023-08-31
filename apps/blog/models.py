from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class BCategory(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Blog(models.Model):
    title = models.CharField(max_length=150)
    category = models.ForeignKey(BCategory, on_delete=models.CASCADE, null=True, blank=True)
    image=models.ImageField(upload_to='images/', null=True, blank=True)
    created_at=models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    
    def __str__(self):
        return self.title
    
    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url
        
class Post(models.Model):
    blog = models.ForeignKey(
        Blog, on_delete=models.CASCADE, related_name="posts")
    comment = models.TextField()
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    website = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(
        User,on_delete=models.CASCADE)

    def __str__(self):
        return self.name