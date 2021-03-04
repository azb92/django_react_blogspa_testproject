"""Views"""
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import BlogCategory, BlogPost, BlogTags
from .serializers import (
    PostsListSerializer,
    PostDetailSerializer,
    CategorySerializer,
    TagsSerializer)
from .service import PaginationPosts


class PostsListView(ListAPIView):
    """Show posts list"""
    queryset = BlogPost.objects.filter(status=1)
    serializer_class = PostsListSerializer
    pagination_class = PaginationPosts


class PostDetailView(RetrieveAPIView):
    """Show post detail"""
    queryset = BlogPost.objects.filter(status=1)
    serializer_class = PostDetailSerializer
    lookup_field = 'slug'


class CategoryListView(ListAPIView):
    """Show categories list"""
    queryset = BlogCategory.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None


class CategoryPostsListView(ListAPIView):
    """Show category list"""
    serializer_class = PostsListSerializer
    pagination_class = PaginationPosts
    lookup_field = 'slug'

    def get_queryset(self):
        slug = self.kwargs['slug']
        queryset = BlogPost.objects.filter(category__slug=slug, status=1)
        return queryset


class TagListView(ListAPIView):
    """Show tags list"""
    queryset = BlogTags.objects.all()
    serializer_class = TagsSerializer
    pagination_class = None


class TagPostsListView(ListAPIView):
    """Show tags list"""
    serializer_class = PostsListSerializer
    pagination_class = PaginationPosts
    lookup_field = 'slug'

    def get_queryset(self):
        slug = self.kwargs['slug']
        queryset = BlogPost.objects.filter(tags__slug=slug, status=1)
        return queryset


class UserPostsListView(ListAPIView):
    """Show user's posts list"""
    serializer_class = PostsListSerializer
    pagination_class = PaginationPosts
    lookup_field = 'slug'

    def get_queryset(self):
        slug = self.kwargs['slug']
        queryset = BlogPost.objects.filter(author__username=slug, status=1)
        return queryset
