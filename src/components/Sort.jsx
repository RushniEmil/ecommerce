import React from "react";
import commonStyles from "../styles/commonStyles"; // Import common styles

const Sort = ({ handleSort }) => {
  const handleChange = (event) => {
    const selectedData = event.target.value;
    handleSort(selectedData);
  };

  return (
    <div className="sort-group mb-3 mx-3" style={{ width: 'auto' }}>
      <label htmlFor="sort-by" className="form-label"  style={{fontSize:'14px'}}>Sort</label>
      <select
        className="form-select"
        id="sort-by"
        name="sort-by"
        onChange={handleChange}
        style={commonStyles.select} // Apply common styles
      >
        <option value="">Default</option>
        <option value="asc">Name: A-Z</option>
        <option value="desc">Name: Z-A</option>
      </select>
    </div>
  );
};

export default Sort;
