import { fetchProductsList, fetchProductByCategory } from "../services/apiservices"; // Import API service functions
import { useState, useEffect, useContext } from "react"; // Import necessary hooks
import Product from "./Product"; // Import Product component
import { CategoryContext } from "../contexts/CategoryContext"; // Import CategoryContext

const ProductListing = () => {
  // State to store the list of products
  const [products, setProducts] = useState([]);
  // Use the CategoryContext to get the selected category
  const category = useContext(CategoryContext);

  // Fetch all products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array ensures this runs once on component mount

  // Fetch products by selected category when the category changes
  useEffect(() => {
    if (category.selectedCategory) {
      getProductByCategory(category.selectedCategory);
    }
  }, [category]); // Dependency array with category to run when it changes

  // Function to fetch all products
  const fetchProducts = async () => {
    try {
      const response = await fetchProductsList();
      setProducts(response.products); // Set the fetched products to the state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Function to fetch products by category
  async function getProductByCategory(category) {
    try {
      const response = await fetchProductByCategory(category);
      setProducts(response.products); // Set the fetched products to the state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <div className="container">
      <div className="row">
        {/* Map through the products and render a Product component for each */}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
