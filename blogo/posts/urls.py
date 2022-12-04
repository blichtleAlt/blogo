from django.urls import path
from . import views


urlpatterns = [
    path('', views.createPost, name='createPost'),
    path('<int:post_id>/', views.getPost, name='getPost')
]