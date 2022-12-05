from django.db import models


class Post(models.Model):
    postId = models.AutoField(primary_key=True)
    userId = models.ForeignKey('users.User', on_delete=models.CASCADE)
    createtime = models.DateTimeField(auto_now_add=True)
    text = models.TextField()
    description = models.TextField()
    title = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    imageLabel = models.CharField(max_length=100)
