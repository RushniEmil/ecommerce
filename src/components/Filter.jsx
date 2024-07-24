import { useState, useEffect, useContext } from "react";
import { fetchCategoriesList } from "../services/apiService";
import { CategoryContext } from "../contexts/CategoryContext";
import commonStyles from "../styles/commonStyles"; // Import common styles

const Filter = () => {
  const { setSelectedCategory } = useContext(CategoryContext);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetchCategoriesList();
        setCategory(response);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, []);

  const handleCategoryChange = (event) => {
    const categoryValue = event.target.value;
    setSelectedCategory(categoryValue);
  };

  return (
    <div className="filter-group mb-3" style={{ width: 'auto' }}>
      <label htmlFor="category"  style={{fontSize:'14px'}} className="form-label">Category:</label>
      <select
        className="form-select"
        id="category"
        name="category"
        onChange={handleCategoryChange}
        style={commonStyles.select} // Apply common styles
      >
        <option value="">Select an option</option>
        {category.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
