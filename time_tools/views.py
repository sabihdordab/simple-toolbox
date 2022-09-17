from django.shortcuts import render

def stopwatch(request):
    return render(request,'time_tools/stopwatch.html')
