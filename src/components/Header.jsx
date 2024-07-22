import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // Hook to navigate programmatically
  const navigate = useNavigate();
  
  // Retrieve the login status from local storage
  const isloggedIn = JSON.parse(localStorage.getItem("loggedin"));

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("loggedin"); // Remove login status from local storage
    navigate("/bliss/login"); // Navigate to login page
  };

  return (
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Furni navigation bar"
    >
      <div className="container">
        {/* Link to the shop page */}
        <Link className="navbar-brand" to="bliss/shop">
          Bliss
        </Link>
        
        {/* Toggle button for collapsed navbar */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible part of the navbar */}
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            {/* Links to different pages */}
            <li className="nav-item">
              <Link className="nav-link" to="bliss/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="bliss/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact us</a>
            </li>
            <li className="nav-item">
              {/* Commented out the search input example */}
              {/* 
              <div className="small fw-light">rounded search input only (with close X)</div>
              <div className="input-group">
                <input className="form-control border rounded-pill" type="search" value="search" id="example-search-input"/>
              </div>
              </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-5 mx-auto">
                  <div className="small fw-light">rounded search input with icon</div>
                  <div className="input-group">
                    <input className="form-control border-end-0 border" type="search" value="search" id="example-search-input"/>
                    <span className="input-group-append">
                      <button className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </div>
              */}
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              {/* Link to user profile */}
              <Link className="nav-link" to="#">
                <IoPersonSharp />
              </Link>
            </li>
            <li>
              {/* Link to the shopping cart */}
              <Link className="nav-link" to="bliss/cart">
                <FaShoppingCart />
              </Link>
            </li>
            <li className="ms-4">
              {/* Logout button, visible only if the user is logged in */}
              {isloggedIn && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;

