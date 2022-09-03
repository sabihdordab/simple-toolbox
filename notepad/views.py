from django.shortcuts import render
from django.http import HttpResponseRedirect , HttpResponse
from django.urls import reverse
from .models import Note
import datetime
from markdown2 import Markdown

def index(request):
    if request.user.is_authenticated :
        return render(request,'notepad/index.html')
    else:
        return HttpResponseRedirect(reverse('login'))

def add_note(request):
    user = request.user
    if not user.is_authenticated :
        return HttpResponseRedirect(reverse('login'))
    
    if request.method == "POST":
        title = request.POST['title']
        if not title:
            title = datetime.datetime.now().strftime('%Y-%m-%d')
        content = request.POST['content']
        note = Note(author=user,title=title,content=content,date=datetime.datetime.now())
        note.save()
        HttpResponseRedirect(reverse('notepad:note',args=(id,)))
    else:
        HttpResponse(status=405)


def note_page(request,id):
    pass