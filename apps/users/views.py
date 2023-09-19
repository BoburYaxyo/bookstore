from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from blog.models import Blog
from cart.cart import Cart
from books.utils import cartview, wishview
from users.models import Profile
from .forms import CustomUserCreationForm, ProfileForm
from django.contrib.auth.models import Group
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.contrib.auth.models import User
from django.db.models import Sum
from books.models import Category, Order, OrderItem
# Create your views here.


def login_user(request):
    page = 'login'
    blogs = Blog.objects.all()

    category = Category.objects.all()
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

    context = {

        'page': page,
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
        'category4': category[3:7]}
    return render(request, 'my-account/index.html', context)


def register(request):
    form = CustomUserCreationForm()
    blogs = Blog.objects.all()
    category = Category.objects.all()
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

    context = {'form': form,
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
               'category4': category[3:7]}

    return render(request, 'my-account/index.html', context)


def logoutUser(request):
    logout(request)
    messages.info(request, 'User was logged out!')
    return redirect('login')


@login_required(login_url='login')
def checkout(request):
    category = Category.objects.all()

    if request.method == 'POST':
        uid = request.session.get('_auth_user_id')
        user = User.objects.get(id=uid)
        country = request.POST.get('country', '')
        first_name = request.POST.get('first_name', '')
        cart = request.session.get('cart')
        print(cart)
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
        additional_information = request.POST.get('additional_information', '')
        order_id = request.POST.get('order_id')
        payment = request.POST.get('payment')
        amount = request.POST.get('amount')

        order = Order.objects.create(
            user=user,
            country=country,
            first_name=first_name,
            last_name=last_name,
            company_name=company_name,
            street_address=street_address,
            home_place_number=home_place_number,
            phone_number=phone_number,
            town_or_city=town_or_city,
            state=state,
            post_code=post_code,
            email_adress=email_adress,
            additional_information=additional_information,
            payment_id=order_id,
            amount=amount
        )
        order.save()
        for i in cart:
            a = cart[i]['price']
            b = cart[i]['quantity']

            total = a * b

            item = OrderItem(
                order=order,
                product=cart[i]['name'],
                image=cart[i]['image'],
                quantity=cart[i]['quantity'],
                price=cart[i]['price'],
                total=total
            )
            item.save()
        cart = Cart(request)
        cart.clear()
        return redirect('home')


    context = {
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
    return render(request, 'checkout.html', context)
