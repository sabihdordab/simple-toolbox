from django.shortcuts import render
from django.http import HttpResponseRedirect , HttpResponse
from django.urls import reverse
from .models import Note
import datetime
from markdown2 import Markdown
from django.core.paginator import Paginator


def index(request):
    user = request.user
    if user.is_authenticated :

        notes = Note.objects.filter(author=user).all().order_by('id').reverse()
        paginator = Paginator( notes, 10)
        page_number = request.GET.get('page')
        page_object = paginator.get_page(page_number)

        return render(request,'notepad/index.html',{
            'page_object' : page_object
        })
    else:
        return HttpResponseRedirect(reverse('login'))

def add_note(request):
    user = request.user
    if not user.is_authenticated :
        return HttpResponseRedirect(reverse('login'))
    
    if request.method == "POST":
        title = request.POST['title']
        if not title:
            title = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        content = request.POST['content']
        note = Note(author=user,title=title,content=content,date=datetime.datetime.now())
        note.save()
        return HttpResponseRedirect(reverse('notepad:note',args=(note.id,)))
    else:
        return HttpResponse(status=405)


def note_page(request,id):
    user = request.user
    try:
        note = Note.objects.get(id=id)
    except:
        return HttpResponse(status=404)

    if not user.is_authenticated :
        return HttpResponseRedirect(reverse('login'))

    if note.author != user :
        return HttpResponse(status=404)
    
    return render(request, 'notepad/note_page.html',{
        'title' : note.title ,
        'content' : Markdown().convert(note.content),
        'date' : note.date.strftime('%Y-%m-%d'),
        'id' : note.id 
    })
    

def delete_note(request,id):
    user = request.user
    try:
        note = Note.objects.get(id=id)
    except:
        return HttpResponse(status=404)

    if not user.is_authenticated or note.author != user:
        return HttpResponse(status=404)
    
    note.delete()
    return HttpResponseRedirect(reverse('notepad:index'))
