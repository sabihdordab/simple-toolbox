 # CS50 Web Programming Final Project
 
 ## Distinctiveness and Complexity:
 This Project is not similar to anything we have already created. My project is a Toolbox,
About complexity, I tryed to use javascript more and i used forms in another way that connected to User model and...(forms.py file in account applation) , all of the web application is responsive to the different screen sizes and...

## About Project:
I have created a toolbox which has Time_tools , Date_tools , Notepad and Accounts applications.
### technologies :
* Back-end : 
*Python*
*SQLite*
* Front-end :
*HTML*
*CSS / Sass*
*Java script*
*Bootstrap*

## Project Informations :


### Css and Sass files: 
Techniques like flexbox and grid are used and tryed to have a responsive project and...
### templates folders :
a layout file (in toolbox application). other HTML files created for all of the different operations explained below.


### Toolbox App:
To display the main page of project , other project page inherit from layout.html of this app.
### Accounts App :
views.py :
- Register Function :
we have a User model in **modles.py** that inherit from AbstractUser and User must enter his/her username, email and password to register.
- Login and Logout Functions...
forms.py :
two form to register(connected to User model) and login.
### Notepad App:
models.py:
a note model that store the author , title , content and date.
views.py :
to writing notes can use **Markdown** , also we can edit and delete notes.. , in main page of notepad i used Paginator and ..
index.js :
functions to check that the content is not empty and something like that...
### Date Tools App:
views.py :
we have two functions :
- calculate :
to calculate the distance between two dates(AD)
- convert:
to convert a  AD date to SD date.
index.js :
usnig Json ... sending request to server and getting response and showing a result ...
### Time Tools App :
just a Js stopwatch.
## How to run the Project:
- Install project dependencies by running pip install -r requirements.txt
- Make and apply migrations by running python manage.py makemigrations and python manage.py migrate.
