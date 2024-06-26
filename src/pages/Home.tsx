import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../components/Navbar";
import Services from "../components/service";
const Home = () => {
  return (
    <>
      <div className="App">
        <div className="container-fluid">
          <Navbar />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 hero hero-lhs">
              <h1 style={{ fontFamily: "Black", fontSize: 50 }}>
                Nigeria's first choice for washing
                <span style={{ color: "#DB7C3B" }}>
                  <Typewriter
                    words={[" Shoes", " Clothes", " Hats", " Houses"]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p>
                Experience laundry care at its finest – where quality meets
                every fold and freshness is our commitment.
              </p>
              <div className="row mt-4 ">
             
                <Link to="/guest" className=" col-lg-4 col-sm-12">
                  <p className="get-started py-2 px-4">
                  Get Started
                  </p>
                 
                </Link>
     
              <Link to="/prices" className="col-lg-4 col-sm-12 ">
                 <p className="get-prices py-2 px-4">
                 Our Prices
                 </p>
                 
                </Link>
              </div>
             
           
            </div>
            <div className="col-lg-6 hero hero-rhs d-flex justify-content-center">
              <img
                src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1699173857/6398c3b78f4a91dd6bef3c26_Image.png"
                className="img-fluid"
                width={400}
                alt="hero_image"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Services />
      </div>
    </>
  );
};

export default Home;
