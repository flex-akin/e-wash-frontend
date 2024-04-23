import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Navbar from "../../components/Navbar";
import { RefObject, useEffect, useRef, useState } from "react";
import { axiosGuestInstance } from "../../utils/axiosInstance";
import toast from "react-hot-toast";
import ScaleLoader from "react-spinners/ScaleLoader";

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false);
  const email: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const password: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const token = localStorage.getItem("userData")

  useEffect(() => {
    if(token){
      navigate("/dashboard/")
    }
  }, [token])

  const handleLogIn =(e : React.FormEvent<HTMLFormElement> ) => {
    const data = {
      email : email.current?.value ,
      password : password.current?.value
    }
    setLoading(true)
    e.preventDefault()
    axiosGuestInstance.post("/auth/login", data )
    .then(
      (response) => {
      toast.success("logged in successfully")
      setLoading(false)
      navigate("/dashboard/")
      }
    )
    .catch((error) => {
      setLoading(false)
      console.log(error)
      toast.error(error.response?.data?.message || "internal server error")
    });
  }

  return (
    <>
      <Navbar />
      <div className="form-body">
        <form className="form-signin" onSubmit={handleLogIn}>
          <h2 className="h4 mb-0 fw-bolder text-center">Sign in</h2>
          <p
            className=" text-center text-muted p-0 m-0"
            style={{ fontSize: 10, margin: 0 }}
          >
            Don't have an Account?
            <Link to="/user/register"> create an account</Link>
          </p>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            ref={email}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            ref={password}
            required
          />
          <div className="checkbox mb-3 d-flex flex-row justify-content-between">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
            <div className="">
              <Link to="/user/forgotPassword" style={{fontSize : "10px", color : "#1f5ded", textDecoration: "underline" }}> Forgot Password</Link>
            </div>
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
              !loading && "Sign In"
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

export default Login;
