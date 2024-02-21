import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./about.css";

const About = () => {
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
      </div>
      <div className="container content-body mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
            <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center about-div ">
                <h1 className="sub-head ">
                  About <br /> ewash
                </h1>
              </div>
              <div className="col-lg-6 col-md-12 d-flex align-items-center about-div">
                <article>
                  <p>
                    Welcome to ewash laundry, where we turn laundry chores into
                    moments of ease and satisfaction. Our commitment is to
                    provide you with a seamless and convenient laundry
                    experience, ensuring that your clothes receive the care and
                    attention they deserve. At ewash, we understand that life
                    can get busy, and laundry can be time-consuming. That's why
                    we're here to make your laundry journey effortless and
                    enjoyable.
                  </p>
                </article>
              </div>
            </div>

            <div className="row">
              <div className="only-small">
              <div className=" col-lg-6 col-md-12 d-flex align-items-center justify-content-center about-div">
                <h1 className="sub-head ">
                  Our <br /> Story
                </h1>
              </div>
              </div>
             
              <div className="col-lg-6 col-md-12 d-flex align-items-center about-div">
                <article>
                  <p>
                    Established with a passion for redefining laundry services,
                    ewash laundry was founded on the principles of quality,
                    convenience, and customer satisfaction. Our journey began
                    with the vision of creating a space where individuals and
                    families could trust us with their garments, knowing that
                    they would be handled with the utmost care.
                  </p>
                </article>
              </div>
              {/* <div className="only-big"> */}
              <div className="only-big col-lg-6 col-md-12 about-div ">
                <h1 className="sub-head ">
                  Our <br /> Story
                </h1>
              </div>
              {/* </div> */}
            </div>

            <div className="row">
            <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center about-div">
                <h1 className="sub-head ">
                  WHAT SET <br /> US APART
                </h1>
              </div>
              <div className="col-lg-6 col-md-12 d-flex align-items-center about-div">
                <article>
                  <ul>
                    <li>
                      <p>Convenient Solutions</p>
                      <p>
                        We understand that your time is precious, and that's why
                        we offer convenient solutions tailored to your schedule.
                        Our user-friendly online platform allows you to schedule
                        pickups and deliveries at your convenience, giving you
                        the freedom to focus on what matters most to you.
                      </p>
                    </li>
                    <li>
                      <p>Quality Service</p>
                      <p>
                        At ewash laundry, we take pride in delivering top-notch
                        laundry services. Our team of experienced professionals
                        is dedicated to ensuring that your clothes are treated
                        with the highest level of care and attention. We use
                        industry-leading technologies and environmentally
                        friendly practices to guarantee the best results.
                      </p>
                    </li>
                    <li>
                      <p>Eco-Friendly Practices</p>
                      <p>
                        Committed to sustainability, we prioritize eco-friendly
                        practices in our operations. From energy-efficient
                        equipment to environmentally conscious detergents, we
                        strive to minimize our ecological footprint and
                        contribute to a greener future.
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
