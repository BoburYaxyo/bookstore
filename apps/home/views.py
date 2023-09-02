from django.shortcuts import render
from books.utils import cartview, wishview
# Create your views here.

def home(request):
    myctx = cartview(request)
    qyctx = wishview(request)
    context={**myctx, **qyctx}
    return render(request, 'home/index.html', context)