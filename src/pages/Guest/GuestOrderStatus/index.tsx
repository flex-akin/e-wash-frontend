import { RefObject, useRef, useState } from "react";
import { axiosGuestInstance } from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

const GuestOrderStatus = () => {
  const [message, setMessage] = useState<string>("")
  const code : RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = code.current?.value;
    axiosGuestInstance
    .get(`/guest/${data}`)
    .then((response) => {
      if (response.data.data.isCompleted ){
        setMessage("Your Order is completed!")
        toast.success("Your Order is completed")
      }
      else {
        setMessage("your order is not ready")
        toast.error("your order is not ready")
      }
    })
    .catch((error) => {
      // toast.error("unable to complete your request at this time");
    });
  };
  return (
    <div className="bg-white ">
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-center pb-4">
            <span className="fw-bold" style={{ fontSize: 20 }}>
              Order Number
            </span>
            <span className=" text-muted" style={{ fontSize: 9 }}>
              Enter your order code to view order status
            </span>
            <span className={` fw-bolder
            ${message == "Your Order is completed" ? "text-success" : "text-danger"} 
            `} style={{ fontSize: 13 }}>
              {message}
            </span>
          </div>
          <div className="pb-4 col-lg-8 col-sm-12 col-md-12">
            <input
            ref={code}
            type="text"
            className="form-control "
            id="orderNumber"
            placeholder="Order Number"
            style={{
                // width : 500,
                height: 50,
                fontSize: 15,
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              style={{ fontSize: "12px" }}
              className="btn btn-success mb-3"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GuestOrderStatus;
