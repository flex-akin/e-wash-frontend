import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Service = () => {
  return (
    <>
      <div className="container-fluid about-body">
        <Navbar />
        <div className="header-bg">
          <div className="d-flex justify-content-end align-items-center">
            <h1 className="heading">
              We are E-Wash!... Nigeria's first Choice.
            </h1>
          </div>
        </div>
        <div className="container">
        <div className="row">
          <div className="sub-head m-5">
            <p className="h1 fw-bold">
              Our Services
            </p>
          </div>
          <div className="col-lg-12">
            <div className="row">
            <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center about-div ">
                <h1 className="sub-head ">
                Laundry <br /> Care
                </h1>
              </div>
              <div className="col-lg-6 col-md-12 d-flex align-items-center about-div">
                <article>
                  <p>
                  From everyday wear to delicate fabrics, we handle all types of laundry with precision and care.
                  </p>
                </article>
              </div>
            </div>

            <div className="row">
              <div className="only-small">
              <div className=" col-lg-6 col-md-12 d-flex align-items-center justify-content-center about-div">
                <h1 className="sub-head ">
                Dry <br /> Cleaning
                </h1>
              </div>
              </div>
             
              <div className="col-lg-6 col-md-12 d-flex align-items-center about-div">
                <article>
                  <p>
                  Trust us with your special garments, and we'll return them to you in pristine condition.
                  </p>
                </article>
              </div>
              {/* <div className="only-big"> */}
              <div className="only-big col-lg-6 col-md-12 about-div ">
                <h1 className="sub-head ">
                  Dry <br /> Cleaning
                </h1>
              </div>
              {/* </div> */}
            </div>

            <div className="row">
            <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center about-div">
                <h1 className="sub-head ">
                Pickup and<br />Delivery
                </h1>
              </div>
              <div className="col-lg-6 col-md-12 d-flex align-items-center about-div">
                <article>
                Enjoy the convenience of our pickup and delivery services, bringing the laundry experience directly to your doorstep.
                </article>
              </div>
             
            </div>

            <div className="row">
              <div className="only-small">
              <div className=" col-lg-6 col-md-12 d-flex align-items-center justify-content-center about-div">
                <h1 className="sub-head ">
                Customer <br /> Satisfaction
                </h1>
              </div>
              </div>
             
              <div className="col-lg-6 col-md-12 d-flex align-items-center about-div">
                <article>
                  <p>
                  Your satisfaction is our priority. We value your feedback and continuously strive to improve our services. If you ever have any questions or concerns, our customer support team is ready to assist you.
                  </p>
                </article>
              </div>
              {/* <div className="only-big"> */}
              <div className="only-big col-lg-6 col-md-12 about-div ">
                <h1 className="sub-head ">
                Customer <br /> Satisfaction
                </h1>
              </div>
              {/* </div> */}
            </div>

          </div>
        </div>
      
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Service;
