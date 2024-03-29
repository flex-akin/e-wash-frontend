
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css";

const OffCanvasNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const jsonString = localStorage.getItem("userData") as string
  const token = localStorage.getItem("token")
  const userData = JSON.parse(jsonString)

  useEffect( () => {
    if(token){
      setAuthenticated(true)
    }
  }, [authenticated])


  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1704299621/Black_4x.png"
            alt="e-wash logo"
            className="img-fluid"
            width={130}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`d-flex offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button type="button" className="btn-close text-reset" onClick={toggleNavbar} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={toggleNavbar}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" onClick={toggleNavbar}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/service" className="nav-link" onClick={toggleNavbar}>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/location" className="nav-link" onClick={toggleNavbar}>Find Location</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="book-a-consultation nav-link" to="/prices" onClick={toggleNavbar}>Our Prices</NavLink>
              </li>
            </ul>
            {
              !authenticated && <>
               <div className="">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to="/user/register" className="nav-link" onClick={toggleNavbar}>Register</Link>
              </li>
              <li className="nav-item">
                <Link to="/user/login" className="nav-link" onClick={toggleNavbar}>Login</Link>
              </li>
            </ul>
            </div>
              </>
            }
            {
              authenticated && <>
              <div>
                <img src={userData.profile_picture} alt="profile picture" 
                className='rounded-img' 
               />
               &nbsp;
                {userData.first_name} {userData.last_name}
              </div>
          
              </>
            }
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default OffCanvasNavbar;
