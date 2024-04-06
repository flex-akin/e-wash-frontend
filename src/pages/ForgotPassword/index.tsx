import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { RefObject, useEffect, useRef, useState } from "react";
import { axiosGuestInstance } from "../../utils/axiosInstance";
import toast from "react-hot-toast";
import ScaleLoader from "react-spinners/ScaleLoader";

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false);
  const email: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const handleForgotPassword =(e : React.FormEvent<HTMLFormElement> ) => {
  
    setLoading(true)
    if(!email.current?.value){
        toast.error("email is not provided")
    }
    else {

  
    e.preventDefault()
    axiosGuestInstance.post(`/users/forgotPassword?email=${email.current?.value}`,  )
    .then(
      (response) => {
      toast.success(response.data.message)
      setLoading(false)
      navigate("/user/login")
      }
    )
    .catch((error) => {
      setLoading(false)
      console.log(error)
      toast.error(error.message)
    });
}
  }

  return (
    <>
      <Navbar />
      <div className="form-body">
        <form className="form-signin" onSubmit={handleForgotPassword}>
          <h2 className="h4 mb-0 fw-bolder text-center">Forgot Password?</h2>
          <p
            className=" text-center text-muted p-0 m-0"
            style={{ fontSize: 10, margin: 0 }}
          >
         Enter your email address...
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
        
          <button
            className="btn btn-dark btn-full mt-4"
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
              !loading && "Submit"
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

export default ForgotPassword;
