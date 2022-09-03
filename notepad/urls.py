from django.urls import path
from . import views

app_name = 'notepad'
urlpatterns = [
    path('',views.index , name = 'index'),
    path('add_note',views.add_note,name='add_note'),
    path('note/<int:id>',views.note_page , name='note'),
    path('delete/<int:id>', views.delete_note , name = 'delete'),
    path('edit/<int:id>',views.edit_note , name = 'edit')
]