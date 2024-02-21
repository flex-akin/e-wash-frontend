import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./guestLayout.css"

const GuestLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container pb-4">
        <div className="row">
          <div className="d-flex justify-content-center pb-5" style={{backgroundColor : "#ffffff"}}>
          <NavLink to="order">
          <div className="guest-layout">
            Make An Order
          </div>
        </NavLink>
        <NavLink to="status">
          <div className="guest-layout">
         Order Status
          </div>
          </NavLink>
          </div>
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default GuestLayout;
