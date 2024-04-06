import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pages/User/Order/Order.css";
import { ArrowDown3, LogoutCurve } from "iconsax-react";
const RootLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userDetails = localStorage.getItem("userData");
  const data = JSON.parse(userDetails as string);
  console.log(data)
  if (!token) {
    navigate("/");
  }
  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-xl-2 side-bar">
            <div className="d-flex flex-column pt-4">
              <ul className="nav flex-column mb-sm-auto mb-0" id="menu">
                {data?.role === "USER" && (
                  <>
                    <li className="nav-item">
                      <NavLink
                        to="/dashboard/"
                        className="nav-link align-middle px-0"
                      >
                        <i className=" bi-house"></i>{" "}
                        <span className="ms-1 d-none d-sm-inline">Home</span>
                      </NavLink>
                    </li>
                    <li className="w-100">
                      <NavLink to="user-order" className="nav-link px-0">
                        {" "}
                        <span className="ms-1 d-none d-sm-inline">
                          Make an Order
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="feedback"
                        className="nav-link align-middle px-0"
                      >
                        <i className=" bi-house"></i>{" "}
                        <span className="ms-1 d-none d-sm-inline">
                          Feedback
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="subscribe"
                        className="nav-link align-middle px-0"
                      >
                        <i className=" bi-house"></i>{" "}
                        <span className="ms-1 d-none d-sm-inline">
                          Select Plan
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="settings"
                        className="nav-link align-middle px-0"
                      >
                        <i className=" bi-house"></i>{" "}
                        <span className="ms-1 d-none d-sm-inline">
                          Account Settings
                        </span>
                      </NavLink>
                    </li>
                  </>
                )}

                {data?.role === "ADMIN" && (
                  <>
                    <li className="nav-item">
                      <NavLink
                        to="/dashboard/"
                        className="nav-link align-middle px-0"
                      >
                        <i className=" bi-house"></i>{" "}
                        <span className="ms-1 d-none d-sm-inline">Home</span>
                      </NavLink>
                    </li>
                    <li className="w-100">
                      <NavLink to="view-feedback" className="nav-link px-0">
                        {" "}
                        <span className="ms-1 d-none d-sm-inline">
                          Feedback
                        </span>{" "}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="settings"
                        className="nav-link align-middle px-0"
                      >
                        <i className=" bi-house"></i>{" "}
                        <span className="ms-1 d-none d-sm-inline">
                          Account Settings
                        </span>
                      </NavLink>
                    </li>
                  </>
                )}

                <li>
                  <button
                    onClick={handleSignOut}
                    className="nav-link px-0 align-middle mt-5"
                    style={{
                      background: "none",
                      border: 0,
                      color: "#000000",
                      fontWeight: "800",
                    }}
                  >
                    <i>
                      <LogoutCurve size="32" color="#000000" variant="Bold" />
                    </i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Sign Out</span>{" "}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-9 col-xl-9 second-content">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
