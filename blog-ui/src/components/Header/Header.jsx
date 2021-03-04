import { Link } from 'react-router-dom';

function Header() {
  return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow" id="mainNav">
    <div className="container-fluid">
        <Link className="navbar-brand" to={{pathname: `/`, fromDashboard: false}}>Django blog</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item text-black">
                    <Link className="nav-link text-black font-weight-bold" to={{pathname: `/about`, fromDashboard: false}}>About</Link>
                </li>
                <li className="nav-item text-black">
                    <Link className="nav-link text-black font-weight-bold" to={{pathname: `/contact`, fromDashboard: false}}>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
<header className="masthead">
    <div className="overlay"></div>
    <div className="container">
        <div className="row">
            <div className=" col-md-8 col-md-10 mx-auto">
                <div className="site-heading">
                    <h3 className=" site-heading my-4 mt-3 text-white"> Welcome to the Blog </h3>
                    <p className="text-light">Categories, posts, tags...
                    </p>
                </div>
            </div>
        </div>
    </div>
</header>
</div>
  );
}

export default Header;