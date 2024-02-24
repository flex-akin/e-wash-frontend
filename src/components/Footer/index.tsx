import { Call } from "iconsax-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (

<div className="container-fluid" style={{ backgroundColor : "#ffffff", paddingTop : 20}}>
  <div className="container">
  <footer style={{fontSize : 15}} className="mt-5">
    <div className="row mt-5">
    <div className="col-lg-5 mb-5">
        <Link className="" to="/">
                <img
                  src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1704299621/Black_4x.png"
                  alt="e-wash logo"
                  className="img-fluid"
                  width={150}
                />
              </Link>
              <p className="pt-3 fs-6">
              Nigeria's first choice for washing
              </p>

              <div className="inline-flex">
                <Call size="13" color="#0d2b66" /> &nbsp; 08138329745
              </div>
       </div>
      <div className="col-lg-3 mb-5">
        <h5>Quick Links</h5>
    

        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Services</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Find Location</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Book a consultation</a></li>
        </ul>
      </div>

      <div className="col-lg-2 mb-5">
        <h5>Services</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Dry Cleaning</li>
          <li className="nav-item mb-2">Step Press</li>
          <li className="nav-item mb-2">Laundry</li>

        </ul>
      </div>

      <div className="col-lg-2 mb-5">
        <h5>Follow Us</h5>
        <ul className="nav flex-column">

        </ul>
      </div>

    
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>&copy; {new Date().getFullYear()} Company, Inc. All rights reserved.</p>
  
    </div>
  </footer>
</div>
</div>

  );
};

export default Footer;
