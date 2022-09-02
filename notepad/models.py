from django.db import models
from accounts.models import User

class Note(models.Model):
    author = models.ForeignKey(User, on_delete= models.CASCADE , related_name='notes')
    title = models.TextField()
    content = models.TextField()
    date = models.DateField()
