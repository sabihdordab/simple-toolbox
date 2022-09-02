from django.shortcuts import render
from django.http import HttpResponse , JsonResponse
import json
import datetime
from dateutil import relativedelta

def index(request):
    return render(request, 'age_calculator/index.html')


def calculate(request):
    if request.method == "POST":
        date = json.loads(request.body).get('date')
        try:
            date = datetime.datetime.strptime(date,"%d-%m-%Y")
            now = datetime.datetime.now()
            delta = relativedelta.relativedelta(now - date)
            message = f'{delta.years} Years , {delta.months} Month , {delta.days} Days'
        except:
            message = 'failed'
        return JsonResponse({'message':message})
    else:
        return HttpResponse(status=404)