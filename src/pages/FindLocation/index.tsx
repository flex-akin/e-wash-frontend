import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { Call, Google, Location } from "iconsax-react";
import "./findlocation.css";
import Footer from "../../components/Footer";

const FindLocation = () => {
  return (
    <>
      <div className="container-fluid location-body">
        <Navbar />

        <div className="header-bg">
          <div className="d-flex justify-content-end align-items-center">
            <h1 className="heading">
              We are E-Wash!... Nigeria's first Choice.
            </h1>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.872443763607!2d5.21482849050663!3d7.25535519554666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478f92149460e1%3A0x3f598089507022fe!2sShowboy%20Plaza!5e0!3m2!1sen!2sng!4v1706028728687!5m2!1sen!2sng"
              width={"100%"}
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

            <div className="col-lg-3 col-sm-12 location-card">
              <div className="d-flex flex-column align-items-center m-4">
                <Location size="40" color="#0d2b66" variant="Bold" />

                <p style={{ textAlign: "center" }}>
                  763C + J5x, El shaddai street, Behind Showboy plaza, Alagbaka
                  GRA, Akure, Ondo state
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 location-card">
              <div className="d-flex flex-column align-items-center m-4">
                <Call size="40" color="#0d2b66" variant="Bold" />

                <p style={{ textAlign: "center" }}>
                +234 (0) 8138329745
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 location-card">
              <div className=" d-flex flex-column align-items-center m-4">
                <Google size="40" color="#0d2b66" variant="Bold" />
              

                <p style={{ textAlign: "center" }}>
                ewashlaundry@gmail.com
                </p>
              </div>
            </div>
          </div>
          </div>
      <Footer />
    </>
  );
};

export default FindLocation;
