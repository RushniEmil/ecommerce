import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/bliss/login");
  };

  // Function to handle user login
  const handleLogin = () => {
    navigate("/bliss/login");
  };
  
  return (
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Furni navigation bar"
    >
      <div className="container">
        <Link className="navbar-brand" to="bliss/shop">
          Bliss
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="bliss/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <Link className="nav-link" to="bliss/profile">
                <IoPersonSharp />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="bliss/cart">
                <FaShoppingCart />
              </Link>
            </li>
            <li className="ms-4">
              {isLoggedIn ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleLogout}
                >
                  Logout
                </button>):(
                  <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleLogin}
                >
                  Login
                </button>

                )
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
