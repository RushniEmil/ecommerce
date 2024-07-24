import axios from "axios";

//Fetches a list of products with a limit of 30.

export const fetchProductsList = async (val) => {
  const response = await axios.get(`https://dummyjson.com/products?limit=30&skip=${val ? val : 0}`);
  return response.data;
};

// Fetches a list of product categories.

export const fetchCategoriesList = async () => {
  const response = await axios.get('https://dummyjson.com/products/category-list');
  return response.data;
};

//Fetches products by a specific category name.

export const fetchProductByCategory = async (categoryname) => {
  const response = await axios.get(`https://dummyjson.com/products/category/${categoryname}`);
  return response.data;
}

//Fetches products by a specific sorting condition.
export const fetchProductBySort=async(sortValue)=>{
  const response = await axios.get(`https://dummyjson.com/products?sortBy=title&order=${sortValue}`);
  return response.data;
}

//Fetches products by a specific keywords.
export const fetchProductBySearch=async(queryValue)=>{
  const response = await axios.get(`https://dummyjson.com/products/search?q=${queryValue}`);
  return response.data;
}