from django.urls import path
from . import views

app_name = 'notepad'
urlpatterns = [
    path('',views.index , name = 'index'),
    path('add_note',views.add_note(),name='add_note')
]