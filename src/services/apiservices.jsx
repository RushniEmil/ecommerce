import axios from "axios";

/**
 * Fetches a list of products with a limit of 30.
 * 
 * @returns {Promise<Object>} The data containing the list of products.
 */
export const fetchProductsList = async () => {
  const response = await axios.get('https://dummyjson.com/products?limit=30');
  return response.data;
};

/**
 * Fetches a list of product categories.
 * 
 * @returns {Promise<Object>} The data containing the list of categories.
 */
export const fetchCategoriesList = async () => {
  const response = await axios.get('https://dummyjson.com/products/category-list');
  return response.data;
};

/**
 * Fetches products by a specific category name.
 * 
 * @param {string} categoryname - The name of the category to fetch products for.
 * @returns {Promise<Object>} The data containing the list of products in the specified category.
 */
export const fetchProductByCategory = async (categoryname) => {
  const response = await axios.get(`https://dummyjson.com/products/category/${categoryname}`);
  return response.data;
};
