from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect 
from django.urls import reverse

def index(request):
    user = request.user
    if user.is_authenticated :
        return render(request, 'toolbox/index.html')
    else:
        return HttpResponseRedirect(reverse('login'))