from django.shortcuts import render


def index(request):
    return render(request, 'age_calculator/index.html')