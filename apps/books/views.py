from django.shortcuts import render
from books.models import Book, Category
from django.db.models import Q
# Create your views here.


def shop(request):
    category = Category.objects.all()
    
    q = request.GET.get('q') if request.GET.get('q') != None else ''
    
    books = Book.objects.filter(
        Q(category__name__icontains=q) |
        Q(price__icontains=q)
    )
    num=books.count()
    context = {'books': books, 'category': category, 'num': num}
    return render(request, 'shop/index.html', context)
