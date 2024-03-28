import { Link, useNavigate } from "react-router-dom";
import { RefObject, useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import "./register.css";
import { axiosGuestInstance } from "../../utils/axiosInstance";
import toast from "react-hot-toast";
import { addPhoneNumber } from "../../utils/dataManipulator";
import ScaleLoader from "react-spinners/ScaleLoader";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const email: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const password: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const c_password: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const last_name: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const first_name: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const address: RefObject<HTMLTextAreaElement> =
    useRef<HTMLTextAreaElement>(null);
  const phone_number: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault();
    const phoneNumber = addPhoneNumber(phone_number.current?.value as string);
    const data = {
      profile_picture:
        "https://res.cloudinary.com/ddaoml7e8/image/upload/v1669879411/samples/bike.jpg",
      username: email.current?.value,
      email: email.current?.value,
      first_name: first_name.current?.value,
      last_name: last_name.current?.value,
      phone_number: phoneNumber,
      address: address.current?.value,
      password: password.current?.value,
    };
    axiosGuestInstance
      .post("/users", data)
      .then((response) => {
        setLoading(false)
        toast.success("registration successful");
        navigate("/user/login");
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="form-body">
        <form className="form-signin" onSubmit={handleRegister}>
          <h2 className="h4 mb-0 fw-bolder text-center ">Create an Account</h2>
          <p
            className=" text-center text-muted p-0 m-0"
            style={{ fontSize: 10, margin: 0 }}
          >
            Already have an Account?<Link to="/user/login"> Login</Link>
          </p>

          <div className="mb-1">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="John"
              ref={first_name}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Doe"
              ref={last_name}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="johndoe@example.com"
              ref={email}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="phonenumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phonenumber"
              placeholder="080XXX"
              ref={phone_number}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="******"
              ref={password}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cPassword"
              placeholder="******"
              ref={c_password}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              rows={2}
              ref={address}
            ></textarea>
          </div>
          <button
            className="btn btn-dark btn-full"
            type="submit"
            style={{ fontSize: 12, fontWeight: 900 }}
            disabled={loading}
          >
            <ScaleLoader
              color="#ffffff"
              height={8}
              loading={loading}
              margin={2}
              radius={2}
              width={5}
            />
            {
              !loading && "Register"
            }
           
          </button>
          <p
            className="mt-2 mb-3 text-muted text-center "
            style={{ fontSize: 10 }}
          >
            &copy;eWash {new Date().getFullYear()}
          </p>
          <p
            className="mt-2 mb-3 text-muted text-center "
            style={{ fontSize: 10 }}
          >
            763C + J5x, El shaddai street, Behind Showboy plaza, Alagbaka GRA,
            Akure, Ondo state
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
