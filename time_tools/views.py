from django.shortcuts import render

def index(request):
    return render(request,'time_tools/index.html')
