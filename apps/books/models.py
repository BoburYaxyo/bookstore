from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
class Book(models.Model):
    name=models.CharField(max_length=150)
    price=models.FloatField(default=0)
    description = models.CharField(max_length=250)
    rating=models.IntegerField(default=3)
    category=models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
