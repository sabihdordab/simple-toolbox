from django import forms

class Register_form(forms.ModelForm):
    username = forms.TextInput()
    email = forms.EmailField()
    password = forms.PasswordInput()

    class Meta:
        model = User
        fields = ['username','email','password']
        

class Login_form(forms.Form):
    pass
