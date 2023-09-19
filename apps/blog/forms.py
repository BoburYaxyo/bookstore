from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from blog.models import Blog, Post

class BlogForm(ModelForm):
    class Meta:
        model = Blog
        fields = ['title',  'category', 'image', 'description', 'classes']

    def __init__(self, *args, **kwargs):
        super(BlogForm, self).__init__(*args, **kwargs)

        for name, field in self.fields.items():
            field.widget.attrs.update({'class': 'input'})
            
 
class PostForm(ModelForm):
    class Meta:
        model = Post
        fields = ['name', 'email', 'website', 'comment']

    def __init__(self, *args, **kwargs):
        super(PostForm, self).__init__(*args, **kwargs)

        for name, field in self.fields.items():
            field.widget.attrs.update({'class': 'input'})