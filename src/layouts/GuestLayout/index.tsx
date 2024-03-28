import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./guestLayout.css";
import { SearchStatus1, ShoppingCart } from "iconsax-react";

const GuestLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container pb-4">
        <div className="row">
          <div
            className="d-flex justify-content-center py-5"
            style={{ backgroundColor: "#ffffff" }}
          >
            <NavLink to="order">
              <div className="guest-layout d-flex flex-row align-items-center">
                <div className="p-2 bg-light">
                <ShoppingCart size="35" color="#ff0303" variant="Bold"/>
                </div>
                <span className="p-2 fs-5 fw-bolder">Make An Order</span>
                </div>
            </NavLink>
            <NavLink to="status">
            <div className="guest-layout d-flex flex-row align-items-center">
                <div className="p-2 bg-light">
                <SearchStatus1 size="35" color="#0313ff" variant="Bold"/>
                </div>
                <span className="p-2 fs-5 fw-bolder">Order Status</span>
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
