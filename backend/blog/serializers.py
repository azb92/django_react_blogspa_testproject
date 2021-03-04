from rest_framework import serializers
from .models import BlogPost, BlogCategory, BlogTags


class CategorySerializer(serializers.ModelSerializer):
    """Category serializer"""
    class Meta:
        model = BlogCategory
        fields = '__all__'


class TagsSerializer(serializers.ModelSerializer):
    """Tags serializer"""
    class Meta:
        model = BlogTags
        fields = '__all__'


class PostsListSerializer(serializers.ModelSerializer):
    """Posts list"""
    category = CategorySerializer(read_only=True)
    author = serializers.SlugRelatedField(slug_field='username', read_only=True)
    tags = TagsSerializer(read_only=True, many=True)

    class Meta:
        model = BlogPost
        exclude = ('status','text_full')


class PostDetailSerializer(serializers.ModelSerializer):
    """Post detail"""
    category = CategorySerializer(read_only=True)
    author = serializers.SlugRelatedField(slug_field='username', read_only=True)
    tags = TagsSerializer(read_only=True, many=True)

    class Meta:
        model = BlogPost
        exclude = ('status','text_short')
