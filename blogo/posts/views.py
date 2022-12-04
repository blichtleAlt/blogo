from django.http import JsonResponse


def index(request):
    data = {'resultStatus': 'SUCCESS', 'message': 'Hello'}

    return JsonResponse(data, safe=False)
