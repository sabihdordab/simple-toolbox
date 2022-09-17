from django.urls import path
from . import views

app_name = 'time_tools'

urlpatterns = [
    path('' , views.index , name = 'index')
]