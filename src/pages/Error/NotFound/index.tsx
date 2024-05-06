import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const NotFound = () => {
  return (
    <>
    <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <img
            src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1715012689/404-removebg-preview.png"
            alt="NOT_FOUND_PAGE"
            className="img-fluid"
          />
          </div>
          <div>
            <Link to="/">
            <button className="btn btn-outline-danger">Go to home page</button>
            </Link>
          </div>
        </div>
     
    </>
  );
};

export default NotFound;
