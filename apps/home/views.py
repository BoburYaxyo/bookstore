from django.shortcuts import redirect, render
from apps.home.forms import ContactForm
from blog.models import Blog
from books.models import Book, Category
from books.utils import cartview, wishview
from django.contrib.auth.decorators import login_required
# Create your views here.


@login_required(login_url='login')
def home(request):
    blogs = Blog.objects.all()
    books = Book.objects.all()
    myctx = cartview(request)
    qyctx = wishview(request)
    category = Category.objects.all()
    context = {
        **myctx,
        **qyctx,
        'books': books[0:9],
        'bbooks': books[3:9],
        'books3': books[4:13],
        'category': category,
        'ncategory': category[3:9],
        'blogs': blogs,
        'bcategory1': category[0:1],
        'bcategory2': category[1:2],
        'bcategory3': category[5:6],
        'bcategory4': category[3:4],
        'bcategory5': category[2:3],
        'bcategory6': category[6:7],
        'bcategory7': category[8:9],
        'category1': category[0:4],
        'category2': category[2:6],
        'category3': category[5:9],
        'category4': category[3:7],
    }
    return render(request, 'home/index.html', context)


def contact(request):
    blogs = Blog.objects.all()
    category = Category.objects.all()
    form = ContactForm()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()

            return redirect('contact')
    context = {
        'category': category,
        'blogs': blogs,
        'ncategory': category[3:9],
        'bcategory1': category[0:1],
        'bcategory2': category[1:2],
        'bcategory3': category[5:6],
        'bcategory4': category[3:4],
        'bcategory5': category[2:3],
        'bcategory6': category[6:7],
        'bcategory7': category[8:9],
        'category1': category[0:4],
        'category2': category[2:6],
        'category3': category[5:9],
        'category4': category[3:7],
        'form': form,
    }

    return render(request, 'contact-with-us/index.html', context)


def terms(request):
    category = Category.objects.all()
    blogs = Blog.objects.all()
    context = {
        'category': category,
        'ncategory': category[3:9],
        'blogs': blogs,
        'bcategory1': category[0:1],
        'bcategory2': category[1:2],
        'bcategory3': category[5:6],
        'bcategory4': category[3:4],
        'bcategory5': category[2:3],
        'bcategory6': category[6:7],
        'bcategory7': category[8:9],
        'category1': category[0:4],
        'category2': category[2:6],
        'category3': category[5:9],
        'category4': category[3:7],
    }

    return render(request, 'index6.html', context)


def faqs(request):
    category = Category.objects.all()
    blogs = Blog.objects.all()
    context = {
        'category': category,
        'ncategory': category[3:9],
        'bcategory1': category[0:1],
        'bcategory2': category[1:2],
        'bcategory3': category[5:6],
        'bcategory4': category[3:4],
        'blogs': blogs,
        'bcategory5': category[2:3],
        'bcategory6': category[6:7],
        'bcategory7': category[8:9],
        'category1': category[0:4],
        'category2': category[2:6],
        'category3': category[5:9],
        'category4': category[3:7],
    }

    return render(request, 'faqs.html', context)


def refs(request):
    category = Category.objects.all()
    blogs = Blog.objects.all()
    context = {
        'category': category,
        'ncategory': category[3:9],
        'bcategory1': category[0:1],
        'blogs': blogs,
        'bcategory2': category[1:2],
        'bcategory3': category[5:6],
        'bcategory4': category[3:4],
        'bcategory5': category[2:3],
        'bcategory6': category[6:7],
        'bcategory7': category[8:9],
        'category1': category[0:4],
        'category2': category[2:6],
        'category3': category[5:9],
        'category4': category[3:7],
    }

    return render(request, 'indexr.html', context)


def about(request):
    category = Category.objects.all()
    blogs = Blog.objects.all()
    context = {
        'category': category,
        'ncategory': category[3:9],
        'bcategory1': category[0:1],
        'bcategory2': category[1:2],
        'bcategory3': category[5:6],
        'bcategory4': category[3:4],
        'bcategory5': category[2:3],
        'bcategory6': category[6:7],
        'blogs': blogs,
        'bcategory7': category[8:9],
        'category1': category[0:4],
        'category2': category[2:6],
        'category3': category[5:9],
        'category4': category[3:7],
    }

    return render(request, 'indexa.html', context)
