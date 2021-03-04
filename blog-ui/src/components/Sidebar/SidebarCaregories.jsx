import React, { useState, useEffect  } from 'react';
import { CategoriesAPI } from './../../API/api';
import { Link } from 'react-router-dom';
import Preloader from './../Common/Preloader/Preloader.jsx';

function SidebarCategories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    CategoriesAPI.getCategoriesList().then(data => {
        setCategories(data)
    })
  }, [])

  return (
      <div className="card my-3">
          <h5 className="card-header">Categories</h5>
          <div className="card-body">
          <ul className="list-group list-group-flush">
          {categories && categories.length > 0
          ? categories.map(category => (
              <li key={category.id} className="list-group-item d-flex justify-content-between align-items-center">
                <Link to={{pathname: `/category/${category.slug}`, fromDashboard: false}}>{category.title}</Link>
              <span className="badge badge-primary badge-pill">count</span></li>))
          :<Preloader/>}
          </ul>
          </div>
      </div>
  );
}

export default SidebarCategories;