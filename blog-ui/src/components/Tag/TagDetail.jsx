import React, {useEffect, useState} from 'react';
import { TagsAPI } from './../../API/api';
import { Link } from 'react-router-dom';
import Preloader from './../Common/Preloader/Preloader.jsx';
import Moment from 'moment';

function TagDetail({match}) {
    const [posts, setTags] = useState([])
    const slug = match.params.slug
    useEffect(() => {
        TagsAPI.getTagDetail(slug).then(data => {
            setTags(data.result)
        })
    }, [slug])

return (
<div className="container">
    <div className="row">
        <div className="col-md-10 mt-3">
        <div className="alert alert-primary" role="alert">{ slug }</div>
        {posts && posts.length > 0
        ? posts.map(post => (
            <div key={post.id} className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text text-muted h6">Posted by <Link to={{pathname: `/user/${post.author}`, fromDashboard: false}}>{post.author}</Link> on {Moment(post.created_on).format('DD.MM.YYYY hh:mm')}</p>
                    <p className="card-text text-muted h6">Category: <Link to={{pathname: `/category/${post.category.slug}`, fromDashboard: false}}>{post.category.title}</Link></p>
                    <p className="card-text text-muted h6">Tags: {post.tags && post.tags.length > 0 ? post.tags.map(tag => (<Link key={tag.id} to={{pathname: `/tag/${tag.slug}`, fromDashboard: false}}>{tag.title}</Link>)) : <span>No tags</span>}</p>
                    <hr/>
                    <p className="card-text">{post.text_short}</p>
                    <Link className="btn btn-primary" to={{pathname: `/post/${post.slug}`, fromDashboard: false}}>Read More</Link>
                </div>
    </div>))
    : <Preloader/>}
    </div>
    </div>
    </div>
)}

export default TagDetail;