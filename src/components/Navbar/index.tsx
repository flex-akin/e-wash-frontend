import { NavLink, Link} from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid mx-5">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse d-flex" id="navbarTogglerDemo03">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="navbar-brand" to="/">
          <img 
          src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1704299621/Black_4x.png" 
          alt="e-wash logo"
          className="img-fluid"
          width={150}
          />
        </Link>
        </li>
        
      </ul>
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  to="/service">Find Location</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="book-a-consulation" to="/service">Book a Consultaion</NavLink>
        </li>
      </ul>

    

<div className="d-flex">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/user/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link  to="/user/login">Login</Link>
        </li>
      
      </ul>

</div>
    

      </div>
    
    </div>
</nav>

  );
}

export default Navbar