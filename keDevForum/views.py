from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    # return HttpResponse("THIS IS AN APPLICATION DEVELOPED BY UMESKIA SOFTWARES")
    return render(request, 'home.html')
