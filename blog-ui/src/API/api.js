import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1'
})

export const PostAPI = {
    getPostDetail (slug) {
        return instance.get(`/post/${slug}`)
        .then(response => {
            return response.data
        })
    }
}

export const TagsAPI = {
    getTagDetail(slug) {
        return instance.get(`/tag/${slug}`)
        .then(response => {
            return response.data
        })
    },
    getTagsList() {
        return instance.get(`/tag/`)
        .then(response => {
            return response.data
        })
    }
}

export const CategoriesAPI = {
    getCategoryDetail(slug) {
        return instance.get(`/category/${slug}`)
        .then(response => {
            return response.data
        })
    },
    getCategoriesList() {
        return instance.get(`/category/`)
        .then(response => {
            return response.data
        })
    }
}
