from django.urls import path
from . import views


urlpatterns = [
    path('', views.createUser, name='createUser'),
    path('<int:user_id>/', views.getUser, name='getUser')
]
