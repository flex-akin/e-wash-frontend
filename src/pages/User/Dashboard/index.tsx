import "./Dashboard.css";
import { sideNavigation } from "../../../utils/data";
import type { NavType } from "../../../utils/models";
import { NavLink } from "react-router-dom";
import { LogoutCurve } from "iconsax-react";


const Dashboard = () => {
  return (
    <>
    <div className="dashboard-body">
    <div className="container">
    <div className="row ">
        <div className="col-lg-2 sub-body d-flex flex-column p-0">
          {sideNavigation &&
            sideNavigation.map((item: NavType) => (
              <NavLink key={item.id} to={item.link} className="btn btn-light side-button">
                {item.name}
              </NavLink>
            ))}
        
        <NavLink to="/" className="btn btn-light side-button">
            
        <LogoutCurve size="32" color="#FF8A65"/> Logout
        </NavLink>
        </div>
      </div>
    </div>
    
    </div>

      <div></div>
    </>
  );
};

export default Dashboard;
