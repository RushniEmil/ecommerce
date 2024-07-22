import { fetchCategoriesList } from "../services/apiservices"; // Import the API service to fetch categories
import { useState, useEffect, useContext } from "react"; // Import necessary hooks
import { CategoryContext } from "../contexts/CategoryContext"; // Import the CategoryContext

const Filter = () => {
  // Use the CategoryContext to get the setSelectedCategory function
  const { setSelectedCategory } = useContext(CategoryContext);

  // State to store the list of categories
  const [category, setCategory] = useState([]);

  // Fetch the list of categories when the component mounts
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetchCategoriesList();
        setCategory(response); // Set the fetched categories to the state
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, []); // Empty dependency array ensures this runs once on component mount

  // Handle the change event for the category select input
  const handleCategoryChange = (event) => {
    const categoryValue = event.target.value;
    setSelectedCategory(categoryValue); // Update the selected category in the context
  };

  return (
    <div className="filter-group mb-3 col-4 ms-3">
      <label htmlFor="category" className="form-label">
        Category:
      </label>
      <select
        className="form-select"
        id="category"
        name="category"
        onChange={handleCategoryChange}
      >
        <option value="">Select an option</option>
        {category.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
