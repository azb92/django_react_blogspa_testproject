""" URL's """
from django.urls import path
from . import views


urlpatterns = [
    path('post/', views.PostsListView.as_view()),
    path('post/<slug:slug>/', views.PostDetailView.as_view()),
    path('category/', views.CategoryListView.as_view()),
    path('category/<slug:slug>/', views.CategoryPostsListView.as_view()),
    path('tag/', views.TagListView.as_view()),
    path('tag/<slug:slug>/', views.TagPostsListView.as_view()),
    path('user/<slug:slug>/', views.UserPostsListView.as_view()),
]
