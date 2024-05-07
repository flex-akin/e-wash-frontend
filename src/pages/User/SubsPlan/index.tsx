import toast from "react-hot-toast";
import { axiosGuestInstance } from "../../../utils/axiosInstance";
import axios from "axios";


const SubsPlan = () => {
  const apiUrl = process.env.REACT_APP_BASE_URL
  const token = localStorage.getItem("token")
  const submitSubscribe = (plan : string) => {
    axiosGuestInstance
      .put(`/users/selectPlan/${plan}`)
      .then((response) => {
        axios
          .post(`${apiUrl}/payment/subscribe/${plan}`, {}, {
            headers : {
              Authorization : `Bearer ${token}`
            }
          })

          .then((response) => {
            window.location.href = response.data.data.authorization_url;
          })
          .catch((error) => {
            toast.error("payment service not available");
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("unable to complete your request at this time");
      });
  };

  return (
    <>
      <div className="feedback ">
        <h3 className="text-center">Select a Plan</h3>
        <div className="row">
          <div className="card col-lg-3 col-md-6 col-sm-12 m-4 card-style">
            <div className="card-body">
              <h5 className="card-title d-inline fw-bolder">₦25,500</h5>
              <span className="d-inline" style={{ opacity: 0.7, fontSize: 10 }}>
                {" "}
                (till plan is exhausted){" "}
              </span>
              <h6 className="card-subtitle mb-2 text-body-secondary text-warning fw-bold pt-2">
                Basic Plan
              </h6>{" "}
              <p className="card-text my-4">
                <ul>
                  <li>30 - 35 Clothes (including special washes)</li>
                  <li>Free Pickup and Delivery</li>
                  <li>Free extension - 5pcs</li>
                </ul>
              </p>
              <button
                type="button"
                className="btn btn-outline-warning w-100 button"
                style={{ fontSize: 12, fontWeight: 900 }}
                onClick={() => {
                  submitSubscribe("basic")
                }}
              >
                Get Plan
              </button>{" "}
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 col-sm-12 m-4 card-style">
            <div className="card-body">
              <h5 className="card-title d-inline fw-bolder">₦35,500</h5>
              <span className="d-inline" style={{ opacity: 0.7, fontSize: 10 }}>
                {" "}
                (till plan is exhausted){" "}
              </span>

              <h6 className="card-subtitle mb-2 text-body-secondary text-success fw-bold pt-2">
                Premium Plan
              </h6>
              <p className="card-text my-4">
                <ul>
                  <li>40 - 45 Clothes (including special washes)</li>
                  <li>Free Pickup and Delivery</li>
                  <li>Free extension - 10 pcs</li>
                  <li>Custom Scent</li>
                </ul>
              </p>
              <button
                type="button"
                className="btn btn-outline-success w-100 button"
                style={{ fontSize: 12, fontWeight: 900 }}
                onClick={() => {
                  submitSubscribe("premium")
                }}
              >
                Get Plan
              </button>
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 col-sm-12 m-4 card-style">
            <div className="card-body">
              <span className="d-inline" style={{ opacity: 0.7, fontSize: 10 }}>
                Pay per wash{" "}
              </span>

              <h6 className="card-subtitle mb-2 text-body-secondary text-danger fw-bold pt-2">
                Wash as a guest
              </h6>
              <p className="card-text my-4">
                <ul>
                  <li>Pay per wash</li>
                  <li>Free Pickup and Delivery</li>
                </ul>
              </p>
              <button
                type="button"
                className="btn btn-outline-danger w-100 button"
                style={{ fontSize: 12, fontWeight: 900 }}
              >
                Get Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubsPlan;
