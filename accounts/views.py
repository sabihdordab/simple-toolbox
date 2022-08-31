from django.shortcuts import render
from .models import User
from .forms import *

def register(request):
    if request.method == 'POST':
        form = Register_form(request.POST)
        if form.is_valid:
            try:
                form.save()
                return HttpResponse("ok")
            except:
                return HttpResponse("this username already token")
        
    return render(request, 'accounts/register.html',{
        'form' : Register_form
        })
