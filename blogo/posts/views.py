from django.http import JsonResponse


def index(request):

    {
      'resultStatus': 'SUCCESS',
      'message': "Hello Api Handler"
      }

    data = {'resultStatus': 'SUCCESS', 'message': 'Hello Api Handler'}

    return JsonResponse(data, safe=False)
