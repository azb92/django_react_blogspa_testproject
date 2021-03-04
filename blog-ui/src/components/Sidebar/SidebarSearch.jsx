function SidebarSearch() {

  return (
      <div className="card my-3">
          <h5 className="card-header">Search</h5>
          <div className="card-body">
              <p><input type="search" placeholder="Try to find...." name="q" className="form-control" required=""></input></p>
              <button className="btn btn-danger" type="submit">Search</button>
          </div>
      </div>
  );
}

export default SidebarSearch;