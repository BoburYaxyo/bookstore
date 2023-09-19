from blog.models import Blog, Post
from books.models import Cart, Order, OrderItem
from books.models import Book, Review
# from rest_framework.response import Response
# from rest_framework import status\
from rest_framework import viewsets

from users.models import Profile
# from rest_framework.views import APIView
from .serializers import BlogSerializer, OrderItemSerializer, OrderSerializer, PostSerializer,BookSerializer, ReviewSerializer
from django.utils.translation import gettext_lazy as _
from rest_framework import generics, mixins

class ReviewVS(viewsets.ModelViewSet):

    serializer_class = ReviewSerializer
    queryset = Review.objects.all()



class BookVS(viewsets.ModelViewSet):

    serializer_class = BookSerializer
    queryset = Book.objects.all()


class OrderVS(viewsets.ModelViewSet):

    serializer_class = OrderSerializer
    queryset = Order.objects.all()

class OrderItemVS(viewsets.ModelViewSet):

    serializer_class = OrderItemSerializer
    queryset = OrderItem.objects.all()

class BlogVS(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
    
class PostVS(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

