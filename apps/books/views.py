from django.shortcuts import render, redirect
from books.models import Book, Cart, Category, Sizes, Tags, Wishist
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from books.utils import cartview, wishview, paginateProducts
from django.contrib import messages
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
def addCartView(request, id) -> None:

    product: Book = Book.objects.get(id=id)
    cart, _ = Cart.objects.get_or_create(user=request.user)
    cart.products.add(product)
    cart.save()

    return redirect('home')

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

def shop(request):
    category = Category.objects.all()
    tags = Tags.objects.all()
    sizes = Sizes.objects.all()
    q = request.GET.get('q') if request.GET.get('q') != None else ''
    
    books = Book.objects.filter(
        Q(category__name__icontains=q) |
        Q(price__icontains=q) |
        Q(tags__name__icontains=q)|
        Q(size__name__icontains=q)
    )
    num=books.count()
    context = {'books': books, 'tags':tags, 'category': category, 'num': num, 'sizes': sizes}
    return render(request, 'shop/index.html', context)

@login_required(login_url='login')
def cart(request):
    myctx = cartview(request)
    category = Category.objects.all()

    context = {**myctx, 'category': category}
    return render(request, 'cart.html', context)


@login_required(login_url='login')
def removeWishlistView(request, id: int) -> None:
    wishProducts: Wishist = Wishist.objects.filter(
        user=request.user).prefetch_related("products").first()
    if wishProducts:
        wishItem = wishProducts.products.get(id=id)
        wishProducts.products.remove(wishItem)

    return redirect('wishlist')


@login_required(login_url='login')
def removeCartView(request, id: int) -> None:
    cartProducts: Cart = Cart.objects.filter(
        user=request.user).prefetch_related("products").first()
    if cartProducts:
        cartItem = cartProducts.products.get(id=id)
        cartProducts.products.remove(cartItem)
        messages.add_message(request, messages.INFO,
                             'Savatchadan muvaffaqqiyatli o\'chirildi ✅')

    return redirect('cart')

@login_required(login_url='login')
def addWishlistView(request, id) -> None:

    product: Book = Book.objects.get(id=id)
    wishlist, _ = Wishist.objects.get_or_create(user=request.user)
    wishlist.products.add(product)
    wishlist.save()

    return redirect('shop')

def singleBook(request):
    
    context = {}
    return render(request, 'single_book.html', context)
