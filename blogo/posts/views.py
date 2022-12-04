from django.http import JsonResponse


def createPost(request):
    data = {'resultStatus': 'SUCCESS', 'message': f'Create post: {request}'}
    return JsonResponse(data, safe=False)

def getPost(request, post_id):
    data = {'resultStatus': 'SUCCESS', 'message': f'Get post: {post_id}'}
    return JsonResponse(data, safe=False)
