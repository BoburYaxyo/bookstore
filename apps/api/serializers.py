from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from blog.models import Blog,BCategory, Post
from books.models import Cart, Order, OrderItem
from books.models import Book, Review, Sizes, Tags, Category
from blog import models


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = "__all__"


class TagSerializer(ModelSerializer):

    class Meta:
        model = Tags
        fields = '__all__'


class SizeSerializer(ModelSerializer):

    class Meta:
        model = Sizes
        fields = '__all__'


# class ColorSerializer(ModelSerializer):

#     class Meta:
#         model = Colors
#         fields = '__all__'


class CategorySerializer(ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


# class BrandSerializer(ModelSerializer):

#     class Meta:
#         model = Brands
#         fields = '__all__'


class BookSerializer(ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    # size = SizeSerializer(many=True, read_only=True)
    # color = ColorSerializer(read_only=True)
    # tags = TagSerializer(read_only=True)
    # category = CategorySerializer(read_only=True)
    # brands = BrandSerializer(read_only=True)
    # user = serializers.StringRelatedField()

    class Meta:
        model = Book
        fields = "__all__"








        
class OrderSerializer(ModelSerializer):

    class Meta:
        model = Order
        fields = "__all__"
        
class OrderItemSerializer(ModelSerializer):
    order = OrderSerializer(read_only=True)
    
    class Meta:
        model = OrderItem
        fields = "__all__"

class PostSerializer(ModelSerializer):

    class Meta:
        model = Post
        fields = "__all__"

class BcategorySerializer(ModelSerializer):
    
    class Meta:
        model = BCategory
        fields = "__all__"
        

class BlogSerializer(ModelSerializer):
    posts = PostSerializer(many=True, read_only=True)
    bcategory = BcategorySerializer(read_only=True)
    posted_by = serializers.StringRelatedField()

    class Meta:
        model = Blog
        fields = "__all__"

