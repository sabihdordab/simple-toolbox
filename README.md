 # CS50 Web Programming Final Project
 
## About Project:
I have created a toolbox which has collected several apps , the toolbox has Time tools , Date tools and Notepad.
User can register/login and use toolbox. 
### Notepad App :
The user can write/edit/delete her/his notes in it , To writing notes can use **Markdown**
#### whats Markdown : 
Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. 
[github markdown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
### Time Tools App :
Time tools app Includes a stop watch to record time , used to time races.
Time tools app can develope to be more useful such as countdown timer and show time zones.
### Date Tools App :
Date tools have two features:
#### 1.Date Converter :
Use to convert AD date into SD date.
#### 2.Age Calculator :
User can calculate the date range between two specific dates.

### Technologies :
**Back-end** : 
- *Python*
- *SQLite*
**Front-end** :
- *HTML*
- *CSS / Sass*
- *Java script*
- *Bootstrap*

[Project video](https://youtu.be/09GLhTwTgoI)

## How to run the Project:
- Install project dependencies by running `pip install -r requirements.txt`
- Make and apply migrations by running `python manage.py makemigrations` and `python manage.py migrate`.


## Distinctiveness and Complexity:
Idea of this project is related to my first javaFX project and i have tried to program and develope that project with Django and this project is totally different from my previous CS50 projects.
i tried to use javascript more than before and i used forms in another way that connected to User model (forms.py file in account applation) , all of the web applications are responsive to the different screen sizes.

# File structure description and summary 

```.
├── accounts *-> Purpose : login , register logout and accounts.*
│   ├── admin.py
│   ├── apps.py
│   ├── forms.py *-> Register and login form that connected to User model in models.py , forms includes email , username , password .*
│   ├── __init__.py
│   ├── migrations
│   │   ├── 0001_initial.py
│   │   ├── __init__.py
│   │   └── __pycache__
│   │       ├── 0001_initial.cpython-310.pyc
│   │       ├── 0001_initial.cpython-39.pyc
│   │       ├── __init__.cpython-310.pyc
│   │       └── __init__.cpython-39.pyc
│   ├── models.py *-> User Model that inheritance from AbstractUser*
│   ├── __pycache__
│   │   ├── admin.cpython-310.pyc
│   │   ├── admin.cpython-39.pyc
│   │   ├── apps.cpython-310.pyc
│   │   ├── apps.cpython-39.pyc
│   │   ├── forms.cpython-310.pyc
│   │   ├── forms.cpython-39.pyc
│   │   ├── __init__.cpython-310.pyc
│   │   ├── __init__.cpython-39.pyc
│   │   ├── models.cpython-310.pyc
│   │   ├── models.cpython-39.pyc
│   │   ├── urls.cpython-310.pyc
│   │   ├── urls.cpython-39.pyc
│   │   ├── views.cpython-310.pyc
│   │   └── views.cpython-39.pyc
│   ├── static
│   │   └── accounts
│   │       └── styles.css *-> styles of login/register display*
│   ├── templates
│   │   └── accounts
│   │       ├── login.html *-> login form display*
│   │       └── register.html *-> register form display*
│   ├── tests.py
│   ├── urls.py *-> Logout , login , register urls*
│   └── views.py *-> Register , Login and Logout Func , If the user enters wrong information or has already registered, she/he cannot register.*
├── capstone *-> Core application*
│   ├── asgi.py
│   ├── __init__.py
│   ├── __pycache__
│   │   ├── __init__.cpython-310.pyc
│   │   ├── __init__.cpython-39.pyc
│   │   ├── settings.cpython-310.pyc
│   │   ├── settings.cpython-39.pyc
│   │   ├── urls.cpython-310.pyc
│   │   ├── urls.cpython-39.pyc
│   │   ├── wsgi.cpython-310.pyc
│   │   └── wsgi.cpython-39.pyc
│   ├── settings.py 
│   ├── urls.py *-> apps urls*
│   └── wsgi.py
├── date_tools
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   │   ├── __init__.py
│   │   └── __pycache__
│   │       └── __init__.cpython-310.pyc
│   ├── models.py
│   ├── __pycache__
│   │   ├── admin.cpython-310.pyc
│   │   ├── admin.cpython-39.pyc
│   │   ├── apps.cpython-310.pyc
│   │   ├── apps.cpython-39.pyc
│   │   ├── __init__.cpython-310.pyc
│   │   ├── __init__.cpython-39.pyc
│   │   ├── models.cpython-310.pyc
│   │   ├── models.cpython-39.pyc
│   │   ├── urls.cpython-310.pyc
│   │   └── views.cpython-310.pyc
│   ├── static
│   │   └── date_tools
│   │       ├── index.js *-> Date tools func to send value of Field to related func(server) in views.py and receive response and show result in Page (to have a more dynamic app)*
│   │       └── styles.css 
│   ├── templates
│   │   └── date_tools
│   │       ├── age_calculator.html *-> display of a html form , user must enter two date.*
│   │       └── date_converter.html *-> display of a html form , user must enter a date.*
│   ├── tests.py
│   ├── urls.py
│   └── views.py *-> two func : 1-calculate : To calculate the distance between two dates(AD) 2-convert:To convert a  AD date to SD date.*
├── db.sqlite3
├── manage.py
├── notepad
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   │   ├── 0001_initial.py
│   │   ├── __init__.py
│   │   └── __pycache__
│   │       ├── 0001_initial.cpython-310.pyc
│   │       ├── 0001_initial.cpython-39.pyc
│   │       ├── __init__.cpython-310.pyc
│   │       └── __init__.cpython-39.pyc
│   ├── models.py *-> a note model to store the author , title , content and date.*
│   ├── __pycache__
│   │   ├── admin.cpython-310.pyc
│   │   ├── admin.cpython-39.pyc
│   │   ├── apps.cpython-310.pyc
│   │   ├── apps.cpython-39.pyc
│   │   ├── __init__.cpython-310.pyc
│   │   ├── __init__.cpython-39.pyc
│   │   ├── models.cpython-310.pyc
│   │   ├── models.cpython-39.pyc
│   │   ├── urls.cpython-310.pyc
│   │   ├── urls.cpython-39.pyc
│   │   ├── views.cpython-310.pyc
│   │   └── views.cpython-39.pyc
│   ├── static
│   │   └── notepad
│   │       ├── index.js *-> Functions to check that the content is not empty and other simillar functions.*
│   │       └── styles.css
│   ├── templates
│   │   └── notepad
│   │       ├── index.html * -> showing all notes card and writing new note..*
│   │       ├── note_page.html *-> showing the choesen note title , text , date ...*
│   │       ├── notes_looks.html * -> notes card*
│   │       └── page_navigation.html * -> to only 10 note in a page*
│   ├── tests.py
│   ├── urls.py
│   └── views.py *->Functions to writing ,edit and delete notes,in main page of notepad(index page related to index func) i used Paginator(only show 10 note in one page)*
├── Pipfile
├── Pipfile.lock
├── README.md
├── requirements.txt
├── time_tools
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   │   ├── __init__.py
│   │   └── __pycache__
│   │       └── __init__.cpython-310.pyc
│   ├── models.py
│   ├── __pycache__
│   │   ├── admin.cpython-310.pyc
│   │   ├── apps.cpython-310.pyc
│   │   ├── __init__.cpython-310.pyc
│   │   ├── models.cpython-310.pyc
│   │   ├── urls.cpython-310.pyc
│   │   └── views.cpython-310.pyc
│   ├── static
│   │   └── time_tools
│   │       ├── index.js *-> stop BTN , reset BTN , start BTN and timer func to set time*
│   │       └── styles.css
│   ├── templates
│   │   └── time_tools
│   │       └── stopwatch.html
│   ├── tests.py
│   ├── urls.py
│   └── views.py * -> render the stop watch display*
└── toolbox *-> Purpose :To display the main page of project , other project page inherit from layout.html of this app.*
    ├── admin.py
    ├── apps.py
    ├── __init__.py
    ├── migrations
    │   ├── __init__.py
    │   └── __pycache__
    │       ├── __init__.cpython-310.pyc
    │       └── __init__.cpython-39.pyc
    ├── models.py
    ├── __pycache__
    │   ├── admin.cpython-310.pyc
    │   ├── admin.cpython-39.pyc
    │   ├── apps.cpython-310.pyc
    │   ├── apps.cpython-39.pyc
    │   ├── __init__.cpython-310.pyc
    │   ├── __init__.cpython-39.pyc
    │   ├── models.cpython-310.pyc
    │   ├── models.cpython-39.pyc
    │   ├── urls.cpython-310.pyc
    │   ├── urls.cpython-39.pyc
    │   ├── views.cpython-310.pyc
    │   └── views.cpython-39.pyc
    ├── static
    │   └── toolbox
    │       ├── icons
    │       │   ├── calculator-icon.png
    │       │   ├── date-converter-icon.png
    │       │   ├── notepad-icon.png
    │       │   └── time.png
    │       ├── index.js
    │       ├── styles.css
    │       ├── styles.css.map
    │       ├── styles.scss
    │       └── toolbox-svgrepo-com.svg
    ├── templates
    │   └── toolbox
    │       ├── index.html *-> app's cards and information*
    │       └── layout.html * -> project navbar*
    ├── tests.py
    ├── urls.py
    └── views.py *-> if user is_authenticated -> main page of toolbox , else -> login page *
```
### Templates folders :
A layout file (in toolbox application). other HTML files created for all of the different operations as i explained below. 
    
### Css and Sass files: 
Techniques like flexbox are used and tried to have a responsive project.
