from django.db import models


class Post(models.Model):
    postId = models.AutoField(primary_key=True)
    userId = models.ForeignKey('users.User', on_delete=models.CASCADE)
    createtime = models.DateTimeField(auto_now_add=True)
    text = models.TextField()