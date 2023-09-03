from django.shortcuts import render
from books.models import Category
from books.utils import cartview, wishview
from django.contrib.auth.decorators import login_required
# Create your views here.
@login_required(login_url='login')
def home(request):
    myctx = cartview(request)
    qyctx = wishview(request)
    category = Category.objects.all()
    context={**myctx, **qyctx, 'category': category}
    return render(request, 'home/index.html', context)