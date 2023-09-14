from django.http import HttpResponse
from django.shortcuts import redirect, render
from apps.blog.utils import paginateBlogs
from blog.models import BCategory, Blog, Post
from .forms import BlogForm, PostForm
from django.contrib import messages
from django.db.models import Q
# Create your views here.

def blog(request):
    kated = BCategory.objects.all()
    b = request.GET.get('b') if request.GET.get('b') != None else ''
    blogs = Blog.objects.filter(
        Q(category__name__icontains=b)
    )
    num = 1
    custom_range, blogs = paginateBlogs(request, blogs, 2)
    context={"blogs":blogs, 'kated':kated, 'num':num}
    return render(request, 'index.html', context)

def blog_details(request, pk):
    blogs = Blog.objects.all()
    blog = Blog.objects.get(pk=pk)
    posts = blog.posts.all()
    form = PostForm()
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            user=form.save(commit=False)
            user.created_by=request.user
            user.blog=blog
            user.save()
            return redirect('blog-data', pk=pk)
        # name = request.POST.get('name', '')
        # comment = request.POST.get('comment', '')
        # email = request.POST.get('email', '')
        # website = request.POST.get('website', '')

        # if comment:
        #     posts = Post.objects.filter(created_by=request.user, blog=blog)
        #     if posts.count() < 2:
        #         post = posts.first()
        #         post.comment = comment
        #         post.name = name
        #         post.email = email
        #         post.website = website
        #         post.save()
        #     else:
        #         post = Post.objects.create(
        #             blog=blog,
        #             name=name,
        #             comment=comment,
        #             email=email,
        #             website=website,
        #             created_by=request.user,
        #         )


    context = {'blog': blog, 'blogs':blogs[0:2], 'form':form, 'posts':posts[0:1]}

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

