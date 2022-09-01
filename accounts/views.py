from django.shortcuts import render
from .models import User
from .forms import *
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect , JsonResponse
from django.urls import reverse

def register(request):
    if request.method == 'POST':
        form = Register_form(request.POST)
        if form.is_valid:
            try:
                user = form.save()
            except:
                return render(request, "accounts/register.html", {
                    "message": "Username already taken.",
                    'form' : form
                })

            login(request, user)
            return HttpResponseRedirect(reverse('toolbox:index'))
    else:  
        return render(request, 'accounts/register.html',{
            'form' : Register_form
        })


def login_view(request):
    pass


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("toolbox:index"))
