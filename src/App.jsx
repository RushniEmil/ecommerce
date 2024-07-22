import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Layout from "./Layout";
import Registration from "./pages/Registration";
import { CategoryProvider } from "./contexts/CategoryContext";
import { useState } from "react";
import ProductsCart from "./pages/ProductsCart";
import { CartProvider } from "use-cart";

function App() {
  // State to manage the selected category, default is "beauty"
  const [selectedCategory, setSelectedCategory] = useState("beauty");

  return (
    // Providing the selected category and setter function to the CategoryProvider
    <CategoryProvider value={{ selectedCategory, setSelectedCategory }}>
      {/* Providing cart functionalities through CartProvider */}
      <CartProvider>
        {/* Setting up the Router for handling navigation */}
        <BrowserRouter>
          <Routes>
            {/* Define the layout and nested routes */}
            <Route path="/" element={<Layout />}>
              {/* Route for the Login page */}
              <Route path="bliss/login" element={<Login />} />
              {/* Route for the Registration page */}
              <Route path="bliss/registration" element={<Registration />} />
              {/* Route for the Shop page */}
              <Route path="bliss/shop" element={<Shop />} />
              {/* Route for the Products Cart page */}
              <Route path="bliss/cart" element={<ProductsCart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </CategoryProvider>
  );
}

export default App;
