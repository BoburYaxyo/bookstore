from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render, redirect
from apps.books.forms import ReviewForm
from books.models import Book, Category, Rating, Review, Sizes, Tags, Wishist
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from blog.models import Blog
from books.utils import cartview, wishview, paginateProducts
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from cart.cart import Cart
# Create your views here.


@login_required(login_url='login')
def wishList(request):
    dbctx: dict = {}
    dbctx["cartitems"] = 0

    if request.user.is_authenticated:
        wishProduct: Wishist = Wishist.objects.filter(
            user=request.user).prefetch_related("products").first()

        if wishProduct:
            dbctx["items"] = wishProduct.products.all()
            dbctx["wishProductsCount"] = wishProduct.products.count()

    return dbctx


@login_required(login_url='login')
def wishlist(request):
    myctx = cartview(request)
    qyctx = wishview(request)
    category = Category.objects.all()
    context = {
        **myctx,
        **qyctx,
        'category': category
    }
    return render(request, 'wishlist.html', context)

@login_required(login_url='login')
def shop(request):

    category = Category.objects.all()
    tags = Tags.objects.all()
    blogs = Blog.objects.all()
    sizes = Sizes.objects.all()
    q = request.GET.get('q') if request.GET.get('q') != None else ''
    products = Book.objects.filter(
        Q(category__name__icontains=q) |
        Q(name__icontains=q) |
        Q(price__icontains=q) |
        Q(size__name__icontains=q)
    )
    num = products.count()
    custom_range, products = paginateProducts(request, products, 4)
    context = {'books': products,
               'tags': tags,
               'blogs': blogs,
               'sizes': sizes,
               'custom_range': custom_range,
               'category': category,
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
               'num': num, 'sizes': sizes}
    return render(request, 'shop/index.html', context)


@login_required(login_url='login')
def removeWishlistView(request, id: int) -> None:
    wishProducts: Wishist = Wishist.objects.filter(
        user=request.user).prefetch_related("products").first()
    if wishProducts:
        wishItem = wishProducts.products.get(id=id)
        wishProducts.products.remove(wishItem)

    return redirect('wishlist')


@login_required(login_url='login')
def addWishlistView(request, id) -> None:
    lasturl = request.META.get('HTTP_REFERER')
    product: Book = Book.objects.get(id=id)
    wishlist, _ = Wishist.objects.get_or_create(user=request.user)
    wishlist.products.add(product)
    wishlist.save()

    return HttpResponseRedirect(lasturl)

@login_required(login_url='login')
def singleBook(request, pk):
   
    blogs = Blog.objects.all()
    book = get_object_or_404(Book, id=pk)
 
    form = ReviewForm()
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.created_by = request.user
            user.book = book
            user.save()
            return redirect('single-book', pk=pk)
    category = Category.objects.all()
    context = {
        'form': form,
        'book': book,
        'blogs': blogs,
        'category': category,
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
    }
    return render(request, 'single_book.html', context)


@login_required(login_url="login")
def cart_add(request, id):
    lasturl = request.META.get('HTTP_REFERER')
    cart = Cart(request)
    product = Book.objects.get(id=id)
    cart.add(product=product)
    return HttpResponseRedirect(lasturl)


@login_required(login_url="login")
def item_clear(request, id):
    lasturl = request.META.get('HTTP_REFERER')
    cart = Cart(request)
    product = Book.objects.get(id=id)
    cart.remove(product)
    return HttpResponseRedirect(lasturl)


@login_required(login_url="login")
def item_increment(request, id):
    lasturl = request.META.get('HTTP_REFERER')
    cart = Cart(request)
    product = Book.objects.get(id=id)
    cart.add(product=product)
    return HttpResponseRedirect(lasturl)


@login_required(login_url="login")
def item_decrement(request, id):
    lasturl = request.META.get('HTTP_REFERER')
    cart = Cart(request)
    product = Book.objects.get(id=id)
    cart.decrement(product=product)
    return HttpResponseRedirect(lasturl)


@login_required(login_url="login")
def cart_clear(request):
    lasturl = request.META.get('HTTP_REFERER')
    cart = Cart(request)
    cart.clear()
    return HttpResponseRedirect(lasturl)


@login_required(login_url="login")
def cart_detail(request):
    category = Category.objects.all()
    blogs = Blog.objects.all()
    context = {
        'category': category,
        'blogs': blogs[2:5],
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
        'category4': category[3:7]}
    return render(request, 'cart.html', context)
