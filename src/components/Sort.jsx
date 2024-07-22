import React from 'react'

const Sort = () => {
  return (
    // Container for the sort group
    <div className="sort-group mb-3 col-4">
      {/* Label for the sort dropdown */}
      <label htmlFor="sort-by" className="form-label">Sort:</label>
      {/* Dropdown for selecting sorting options */}
      <select className="form-select" id="sort-by" name="sort-by">
        <option value="">Default</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </select>
    </div>
  )
}

export default Sort
