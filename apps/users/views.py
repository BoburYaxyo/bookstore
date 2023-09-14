from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from books.utils import cartview, wishview
from users.models import Profile
from .forms import CustomUserCreationForm, ProfileForm
from django.contrib.auth.models import Group
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.contrib.auth.models import User
from django.db.models import Sum
from books.models import Cart, Order
# Create your views here.

def login_user(request):
    page = 'login'
    if request.user.is_authenticated:
        return redirect('home')

    if request.method == 'POST':
        username = request.POST.get('username').lower()
        password = request.POST.get('password')

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, "User does not exist")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, "Username OR Password does not exist")

    context = {'page': page}
    return render(request, 'my-account/index.html', context)

def register(request):
    form = CustomUserCreationForm()

    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)

        if form.is_valid():
            username = request.POST.get('username')
            email = request.POST.get('email')
            password1 = request.POST.get('password1')
            password2 = request.POST.get('password2')
            user = form.save(commit=False)
            user.username = username.lower()
            user.email = email
            user.password1 = password1
            user.password2 = password2
            user.save()

            group = Group.objects.get(name='customer')
            user.groups.add(group)
            messages.success(request, 'User account was created!')

            login(request, user)
            return redirect('home')

        else:
            messages.success(
                request, 'An error has occurred during registration')

    context = {'form': form}
    
    return render(request, 'my-account/index.html')
def logoutUser(request):
    logout(request)
    messages.info(request, 'User was logged out!')
    return redirect('login')

@login_required(login_url='login')
def checkout(request):
    if request.method == 'POST':
        order_by = request.POST.get('order_by', '')
        country = request.POST.get('country', '')
        first_name = request.POST.get('first_name', '')
        last_name = request.POST.get('last_name', '')
        company_name = request.POST.get('company_name', 'Uzbekistan')
        street_address = request.POST.get('street_address', '')
        home_place_number = request.POST.get('home_place_number', '')
        phone_number = request.POST.get('phone_number', '')
        total_order = request.POST.get('total_order', '')
        town_or_city = request.POST.get('town_or_city', '')
        state = request.POST.get('state', '')
        products = request.POST.get('products', '')
        post_code = request.POST.get('post_code', '')
        email_adress = request.POST.get('email_address', '')
        ship_different = request.POST.get('ship_different', '')
        cart_products = Cart.objects.filter(
            user=request.user).prefetch_related("products").first()
        my = cart_products.products.aggregate(
            Sum('price')).get('price__sum')
        ca = cart_products.products.all()

        if first_name:
            orders = Order.objects.filter(order_by=request.user, total_order=my, cart=request.user.cart)
            if orders:
                order.order_by = order_by
                order.country = country
                order.products = products
                order.first_name = first_name
                order.last_name = last_name
                order.company_name = company_name
                order.street_address = street_address
                order.home_place_number = home_place_number
                order.phone_number = phone_number
                order.town_or_city = town_or_city
                order.state = state
                order.post_code = post_code
                order.email_adress = email_adress
                order.ship_different = ship_different
                order.save()
            else: 
                order = Order.objects.create(
                    order_by=request.user,
                    total_order=my,
                    cart = request.user.cart,
                    country=country,
                    first_name=first_name,
                    last_name=last_name,
                    company_name=company_name,
                    street_address=street_address,
                    home_place_number=home_place_number,
                    phone_number=phone_number,
                    town_or_city=town_or_city,
                    state = state,
                    post_code=post_code,
                    email_adress=email_adress,
                    ship_different = ship_different,
                )

            return redirect('checkout')
            

    myctx = cartview(request)
    qyctx = wishview(request)
    context = {
        **myctx,
        **qyctx,
        }
    return render(request, 'checkout.html', context)
