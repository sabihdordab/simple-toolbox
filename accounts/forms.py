from django import forms
from .models import User
class Register_form(forms.ModelForm):
    username = forms.TextInput()
    email = forms.EmailField()
    attrs = {
        "type": "password",
    }
    password = forms.CharField(widget=forms.TextInput(attrs=attrs))
    class Meta:
        model = User
        fields = ['username','email','password']
        

class Login_form(forms.Form):
    username = forms.TextInput()
    attrs = {
        "type": "password"
    }
    password = forms.CharField(widget=forms.TextInput(attrs=attrs))
