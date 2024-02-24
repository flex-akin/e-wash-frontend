import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Service.css"

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
          <div className="sub-head mt-5">
            <p className="h1 fw-bold">
              Our Services
            </p>
            <div className="service-cont">
    
           <div className="card p-2 card-custom " >
  <img src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1708601947/dads-housework-abstract-concept-illustration_335657-611.jpg" 
  className="" alt="..." height={250} width={270}/>
  <div className="card-body">
    <p className="card-text">Laundry Care</p>
    <p className="" style={{fontFamily : "Regular", textTransform : "none"}}>
  From everyday wear to delicate fabrics, we handle all types of laundry with precision and care.

  </p>
  </div>



</div>
     
<div className="card p-2 card-custom" >
  <img src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1708601948/hand-drawn-laundry-service-illustration_23-2151239914.jpg" 
  className="" alt="..." height={250}  width={270}/>
  <div className="card-body">
    <p className="card-text">Dry Cleaning</p>
    <p className="" style={{fontFamily : "Regular", textTransform : "none"}}>
  Trust us with your special garments, and we'll return them to you in pristine condition.
  </p>
  </div>
  


</div>
<div className="card p-2 card-custom" >
  <img src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1708601947/cloud-kitchen-concept-with-fast-delivery-symbols-isometric-vector-illustration_98292-9664.jpg" 
  className="" alt="..." height={250}  width={270}/>
  <div className="card-body">
    <p className="card-text">Pick Up and Deliver</p>
    <p className="" style={{fontFamily : "Regular", textTransform : "none"}}>
  Enjoy the convenience of our pickup and delivery services, bringing the laundry experience directly to your doorstep.
  </p>
  </div>
  


</div>
<div className="card p-2 card-custom" >
  <img src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1708601947/emotional-feedback-concept-illustration_114360-21832.jpg" 
  className="" alt="..." height={250}  width={270}/>
  <div className="card-body">
    <p className="card-text">Customer Satisfaction</p>
    <p className="" style={{fontFamily : "Regular", textTransform : "none"}}>
  Your satisfaction is our priority. We value your feedback and continuously strive to improve our services. If you ever have any questions or concerns, our customer support team is ready to assist you.
  </p>
  </div>
  


</div>

 
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
