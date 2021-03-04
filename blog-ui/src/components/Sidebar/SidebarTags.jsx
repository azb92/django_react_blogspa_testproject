import React, { useState, useEffect  } from 'react';
import { TagsAPI } from './../../API/api';
import { Link } from 'react-router-dom';
import Preloader from './../Common/Preloader/Preloader.jsx';

function SidebarTags() {
  const [tags, setTags] = useState([])
  useEffect(() => {
    TagsAPI.getTagsList().then(data => {
      setTags(data);
    })
  }, [])

  return (
    <div className="card my-3">
        <h5 className="card-header">Tags</h5>
        <div className="card-body">

        {tags && tags.length >0
        ? tags.map(tag => (
            <Link key={tag.id} className="badge badge-primary" to={{pathname: `/tag/${tag.slug}`}}>{tag.title}
            <span className="badge badge-light">count</span></Link>))
        : <Preloader/>}
        </div>
    </div>
  );
}

export default SidebarTags;