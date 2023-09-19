from django.http import HttpResponse
from django.shortcuts import redirect, render
from blog.utils import paginateBlogs
from books.models import Category
from blog.models import BCategory, Blog, Post
from .forms import BlogForm, PostForm
from django.contrib import messages
from books.utils import cartview, wishview
from django.db.models import Q
# Create your views here.

def blog(request):
    kated = BCategory.objects.all()
    category = Category.objects.all()
    myctx = cartview(request)
    qyctx = wishview(request)
    b = request.GET.get('b') if request.GET.get('b') != None else ''
    blogs = Blog.objects.filter(
        Q(category__name__icontains=b)
    )
    num = 1
    custom_range, blogs = paginateBlogs(request, blogs, 5)
    context={
            **myctx,
        **qyctx,
        "blogs":blogs,
        'kated':kated,
        'num':num,
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
    return render(request, 'index.html', context)

def blog_details(request, pk):
    blogs = Blog.objects.all()
    blog = Blog.objects.get(pk=pk)
    posts = blog.posts.all()
    form = PostForm()
    category = Category.objects.all()  
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            user=form.save(commit=False)
            user.created_by=request.user
            user.blog=blog
            user.save()
            return redirect('blog-data', pk=pk)
    context = {'blog': blog,
        'bblogs':blogs[0:2],
        'form':form,
        'blogs':blogs,
        'posts':posts[0:1],
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
        'category4': category[3:7],}

    return render(request, 'learn-once-read-everywhere/index.html', context)
def add_blog(request):
    form = BlogForm()
    
    if request.method == 'POST':
        form = BlogForm(request.POST, request.FILES)
        
        if form.is_valid():
            form.save()
            return redirect('blog')
            
    context={'form': form}
    return render(request, 'crud.html', context)
def edit_blog(request, pk):
    room = Blog.objects.get(pk=pk)
    form = BlogForm(instance=room)
    if request.method == 'POST':
        form = BlogForm(request.POST, request.FILES, instance=room)
        if form.is_valid():
            form.save()
            return redirect('blog-data', room.id)
        
    context = {'form': form, 'blog': room}
    return render(request, 'crud.html', context)

def deleteBlog(request, pk):
    skill=Blog.objects.get(id=pk)
    if request.method == 'POST':
        skill.delete()
        messages.success(request, 'Skill was deleted successfully!')
        return redirect('blog')

    context = {'object': skill}
    return render(request, 'delete_template.html', context)

def a404(request): 
   category = Category.objects.all()    
   context={
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
   return render(request, '404.html', context)