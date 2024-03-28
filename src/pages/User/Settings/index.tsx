import { Edit } from "iconsax-react";
import React from "react";

const Settings = () => {
  const jsonString = localStorage.getItem("userData") as string;
  const token = localStorage.getItem("token");
  const userData = JSON.parse(jsonString);
  return (
    <>
      <div className="feedback mb-3">
        <h4>Your Account</h4>
        <div className="d-flex flex-row m-5">
          <img
            src={userData.profile_picture}
            alt="profile picture"
            className="profile-img"
          />
          <div className="d-flex flex-column m-4">
            <span className=" fs-3 fw-bold">
              {userData.first_name} {userData.last_name}
            </span>
            <span className="text-muted text-center">{userData.email}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className=" col-sm-12 col-lg-7">
          <div className="feedback">
            <h5 className="fw-bolder d-inline">User Info</h5>

            <Edit size="15" color="#000000" className=" mb-3 d-inline"/>
            <div>
              <span className=" fw-bold">Address</span>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              impedit, a debitis id obcaecati maiores beatae eos vero delectus
              facere esse magnam mollitia inventore possimus incidunt porro
              temporibus libero! Ut?
              </p>
            
            </div>
          </div>
        </div>
        <div className=" col-sm-12 col-lg-5">
          <div className="feedback">
            <span className=" fw-bold">Change password</span>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button
                style={{ fontSize: "12px", background: "#000" }}
                className="btn btn-dark"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
