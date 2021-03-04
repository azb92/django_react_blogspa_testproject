# django_react_blogspa_testproject

<p>SPA-Blog (Single Page Application) based on Django + Django REST Framework for backend and React for frontend.</p>

<img src="https://raw.githubusercontent.com/azb92/django_react_blogspa_testproject/master/Pic.png">

<p><strong>Requirements for backend:</strong><br>
Python 3.9.1, Django 3.1.7, djangorestframework 3.12.2, django-cors-headers 3.7.0, django-filter 2.4.0, drf-yasg 1.20.0</p>

<p><strong>Requirements for frontend:</strong><br>
React, axios, bootstrap, react-router-dom, moment</p>

<p><h2>How to run this project:</h2></p>
<p><strong>Backend:</strong><br>
1. makemigrations<br>
2. migrate<br>
3. runserver<br>
4. createsuperuser<br>
5. add from admin panel some categories/tags/posts</p>

<p><strong>Frontend:</strong><br>
1. npm install<br>
2. npm start<br></p>

<p><strong>Hint:</strong><br>
Some commands is possible to run using Makefile:<br>
1. make start-back<br>
2. make start-front<br>
3. make makemigtarions<br>
4. make migrate<br>
5. make superuser<br></p>

<p><h2>Current state of the project</h2></p>
<p><strong>Backend API returns:</strong><br>
/category/<br>
/category/{slug}/ <i>(with pagination)</i><br>
/post/ <i>(with pagination)</i><br>
/post/{slug}/<br>
/tag/<br>
/tag/{slug}/ <i>(with pagination)</i><br>
/user/{slug}/ <i>(with pagination)</i><br>
The best way to try API is Swagger (http://127.0.0.1:8000/swagger/)</p>
<p><strong>Frontend:</strong></p>
Categories, posts, tags, smooth navigation, preloader, correct data and time.</p>

<p><h2>Todo:</h2>
1. Maina page<br>
2. Pagination (fronend)<br>
3. Search functionality<br></p>
