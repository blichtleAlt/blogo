from django.http import JsonResponse


def createUser(request):
    data = {'resultStatus': 'SUCCESS', 'message': f'Create user: {request}'}
    return JsonResponse(data, safe=False)

def getUser(request, user_id):
    data = {'resultStatus': 'SUCCESS', 'message': f'Get user: {user_id}'}
    return JsonResponse(data, safe=False)