from django.urls import path
from . import views

app_name = 'date_tools'
urlpatterns = [
    path('age_calculator',views.age_calculator ,name = 'age_calculator'),
    path('date_converter',views.date_converter ,name = 'date_converter'),
    path('calculate' , views.calculate , name='calculate'),
    path('convert' , views.convert , name='convert')
]