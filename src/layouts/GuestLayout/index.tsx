import { NavLink, Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"


const GuestLayout = () => {
  return (
    <>
     <Navbar />
     <main className="container">
     <NavLink to="order">Make an Order</NavLink>
     <NavLink to="status">Order Status</NavLink>
        <Outlet />
     </main>
     <Footer />

    </>
  )
}

export default GuestLayout