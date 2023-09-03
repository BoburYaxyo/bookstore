from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Tags(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
class Sizes(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
class Book(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    name=models.CharField(max_length=150)
    price=models.FloatField(default=0)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    description = models.CharField(max_length=250)
    rating=models.IntegerField(default=3)
    category=models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    tags=models.ForeignKey(Tags, on_delete=models.SET_NULL, null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    sku = models.CharField(max_length=255, null=True, blank=True)
    size = models.ForeignKey(Sizes, on_delete=models.SET_NULL, null=True)
    
    def __str__(self):
        return self.name
    

class Wishist(models.Model):
    user = models.OneToOneField(
        User, null=True, blank=True, on_delete=models.PROTECT)
    products = models.ManyToManyField(
        Book, blank=True, related_name='wishlistproducts')

class Cart(models.Model):
    user = models.OneToOneField(
        User, null=True, blank=True, on_delete=models.PROTECT)
    products = models.ManyToManyField(
        Book, blank=True, related_name='cartproducts')

class Order(models.Model):
    order_by = models.ForeignKey(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=150)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    street_address = models.CharField(max_length=100)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, null=True, blank=True, related_name='order')
    home_place_number = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    total_order = models.IntegerField(default=0)
    town_or_city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    post_code = models.CharField(max_length=100)
    email_adress = models.EmailField(max_length=100)
    ship_different = models.BooleanField(default=False, null=True, blank=True)
    order_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

class Review(models.Model):
    name = models.CharField(max_length=150,)
    email = models.EmailField(max_length=150)
    book = models.ForeignKey(
        Book, related_name="reviews", on_delete=models.CASCADE)
    rating = models.CharField(max_length=200)
    content = models.TextField()
    created_by = models.ForeignKey(
        User, related_name="reviews", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']