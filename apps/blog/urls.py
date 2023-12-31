from django.urls import path

from apps.blog import views


urlpatterns = [
    path('', views.blog, name='blog'),
    path('blog_details/<int:pk>/', views.blog_details, name='blog-data'),
    path('edit-blog/<str:pk>/', views.edit_blog, name='edit-blog'),
    path('add-blog/', views.add_blog, name='add-blog'),
    path('404/', views.a404, name='404'),
    path('delete-blog/<str:pk>/', views.deleteBlog, name='delete-blog'),
]
