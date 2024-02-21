import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="mb-3 ">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="john_doe"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div>
        <input type="submit" className="btn btn-warning w-100 reg-button" />
      </div>
    </>
  );
};

export default Login;
