import SidebarSearch from './SidebarSearch';
import SidebarCategories from './SidebarCaregories';
import SidebarTags from './SidebarTags';

function Sidebar() {
  return (
      <div className="col-md-3 float-right ">
          <SidebarSearch />
          <SidebarCategories />
          <SidebarTags />
      </div>
  );
}

export default Sidebar;