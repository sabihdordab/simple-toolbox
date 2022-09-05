from django.shortcuts import render
from django.http import HttpResponse , JsonResponse
import json
from datetime import datetime
from dateutil import relativedelta
from django.views.decorators.csrf import csrf_exempt
from persiantools.jdatetime import JalaliDate

def age_calculator(request):
    return render(request, 'date_tools/age_calculator.html')

def date_converter(request):
    return render(request, 'date_tools/date_converter.html')

@csrf_exempt
def calculate(request):
    if request.method == "POST":
        data = json.loads(request.body).get('date')
        try:
            date = datetime.strptime(data.strip(),"%Y-%m-%d")
            now = datetime.now()
            delta = relativedelta.relativedelta(now,date)
            message = f'{delta.years} Years , {delta.months} Month , {delta.days} Days'
        except:
            message = 'failed'
        return JsonResponse({'message': message })
    else:
        return HttpResponse(status=404)

@csrf_exempt
def convert(request):
    if request.method == "POST":
        data = json.loads(request.body).get('date')
        try:
            date = datetime.strptime(data.strip(),"%Y-%m-%d")
            converted_date = JalaliDate(date)
            message = converted_date.strftime("%d/%m/%Y")
        except:
            message = 'failed'
        return JsonResponse({'message': message })
    else:
        return HttpResponse(status=404)

