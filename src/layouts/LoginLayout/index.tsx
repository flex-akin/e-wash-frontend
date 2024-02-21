import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./loginLayout.css";

const LoginLayout = () => {
  const location = useLocation();
  let service: {
    name: string;
    link: string;
    content: string;
  };
  if (location.pathname === "/user/login") {
    service = {
      name: "Register",
      link: "register",
      content: `Don't have an account yet?`,
    };
  } else if (location.pathname === "/user/verify") {
    service = {
      name: "",
      link: "",
      content: `Didn't recieve any pin?`,
    };
  } else {
    service = {
      name: "Login",
      link: "login",
      content: `Already have an account?`,
    };
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 login-lhs"></div>
        <div className="col-6 d-flex flex-column justify-content-center login-rhs">
          <div>
            <h5>Welcome to e-wash</h5>
          </div>
          <div>
            <p>
              {service.content},{" "}
              <b>
                <NavLink to={service.link}>{service.name}</NavLink>
              </b>
            </p>
          </div>

          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
