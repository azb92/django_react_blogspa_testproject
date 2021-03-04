import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { PostAPI } from './../../API/api';
import Moment from 'moment';

function PostDetail({match}) {
    const [post, setPost] = useState([])
    const [category, setCategory] = useState([])
    const slug = match.params.slug
    useEffect(() => {
        PostAPI.getPostDetail(slug).then(data => {
            setPost(data)
            setCategory(data.category)
        })
    }, [slug])

return (
<div className="container">
    <div className="row">
        <div className="col-md-10 mt-3">
            <div key={post.id} className="card mb-4">
                {post.slug && post.slug.length > 0
                ? <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text text-muted h6">Posted by <Link to={{pathname: `/user/${post.author}`, fromDashboard: false}}>{post.author}</Link> on {Moment(post.created_on).format('DD.MM.YYYY hh:mm')}</p>
                <p className="card-text text-muted h6">Category: <Link to={{pathname: `/category/${category.slug}`, fromDashboard: false}}>{category.title}</Link></p>
                <p className="card-text text-muted h6">Tags: {post.tags && post.tags.length > 0 ? post.tags.map(tag => (<Link key={tag.id} to={{pathname: `/tag/${tag.slug}`, fromDashboard: false}}>{tag.title}</Link>)) : <span>No tags</span>}</p>
                <hr />
                <p className="card-text">{post.text_full}</p>
                </div>
                : <div>Post not found!</div>}
            </div>
        </div>
    </div>
</div>
)}

export default PostDetail;