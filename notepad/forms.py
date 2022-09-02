from django import forms


class Note_form(forms.Form):
    title = forms.TextInput()
    content = forms.Textarea()