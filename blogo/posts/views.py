from django.http import JsonResponse
from .models import Post


def createPost(request):

    if (request.method == "GET"):
        print("get")
        data = {'posts': list(Post.objects.values())}
        return JsonResponse(data, safe=False)
    elif (request.method == "POST"):
        print("post")
        data = {'resultStatus': 'SUCCESS', 'message': f'Creating a'}
        return JsonResponse()


def getPost(request, post_id):
    data = {'resultStatus': 'SUCCESS', 'message': f'Get post: {post_id}'}
    return JsonResponse(data, safe=False)
