import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Layout from "./Layout";
import Registration from "./pages/Registration";
import { CategoryProvider } from "./contexts/CategoryContext";
import { useState } from "react";
import ProductsCart from "./pages/ProductsCart";
import { CartProvider } from "react-use-cart";
import { Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
// import NotFound from "./pages/NotFound"; // Import your 404 component

// Function to check if the user is logged in
const isLoggedIn = () => !!localStorage.getItem('loggedin'); // Adjust based on your authentication method

// Protected Route Component
const PrivateRoute = ({ element }) => {
  return isLoggedIn() ? element : <Navigate to="/bliss/login" />;
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState("beauty");

  return (
    <CategoryProvider value={{ selectedCategory, setSelectedCategory }}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Main layout and route definitions */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/bliss/login" />} />
              <Route path="bliss/login" element={<Login />} />
              <Route path="bliss/registration" element={<Registration />} />
              <Route path="bliss/shop" element={<Shop />} />
              <Route path="bliss/cart" element={<ProductsCart />} />
              <Route path="bliss/profile" element={<PrivateRoute element={<Profile />} />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </CategoryProvider>
  );
}

export default App;