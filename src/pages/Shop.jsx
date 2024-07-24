import { useState, useEffect, useContext, useCallback } from "react";
import { TextField, InputAdornment, Pagination } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // Import Search Icon
import { CategoryContext } from "../contexts/CategoryContext";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import Product from "../components/Product";
import {
  fetchProductsList,
  fetchProductByCategory,
  fetchProductBySearch,
} from "../services/apiService";
import { transformProductData } from "../services/productService";
import { useNavigate } from "react-router-dom";
import commonStyles from "../styles/commonStyles"; // Import common styles
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { debounce } from 'lodash';
import { ClipLoader } from 'react-spinners'; // Import react-spinners

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const category = useContext(CategoryContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (category.selectedCategory) {
      getProductByCategory(category.selectedCategory);
    }
  }, [category]);

  useEffect(() => {
    if (sortValue) {
      getProductBySort(sortValue);
    }
  }, [sortValue]);

  const fetchProducts = async (limit = 10) => {
    setLoading(true);
    try {
      const response = await fetchProductsList(limit);
      const transformedProducts = response.products.map(transformProductData);
      setProducts(transformedProducts);
      setTotal(response.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const getProductByCategory = async (category) => {
    setLoading(true);
    try {
      const response = await fetchProductByCategory(category);
      const transformedProducts = response.products.map(transformProductData);
      setProducts(transformedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const getProductBySort = async (sortValue) => {
    setLoading(true);
    try {
      const response = await fetchProductBySort(sortValue);
      const transformedProducts = response.products.map(transformProductData);
      setProducts(transformedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = useCallback(debounce(async (searchQuery) => {
    setLoading(true);
    try {
      const response = await fetchProductBySearch(searchQuery);
      if (response.products.length === 0) {
        toast.info('No search matches found');
      } else {
        const transformedProducts = response.products.map(transformProductData);
        setProducts(transformedProducts);
        toast.dismiss(); // Dismiss any previous notifications
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error('Error fetching products. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, 300), []); // Adjust the debounce delay as needed

  const handleChange = (event, value) => {
    const limit = value * 30 - 30;
    fetchProducts(limit);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    handleSearch(event.target.value); // Trigger search as user types
  };

  const handleSortValue = (sortValue) => {
    setSortValue(sortValue);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-md-4">
            <TextField
  id="search"
  type="text"
  value={searchValue}
  onChange={handleSearchChange}
  placeholder="Search"
  variant="standard"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
  }}
  sx={{
    '& .MuiInputBase-root:before': {
      borderBottomColor: '#3b5d50',
    },
    '&:hover .MuiInputBase-root:before': {
      borderBottomColor: '#2d453c',
    },
    '&.Mui-focused .MuiInputBase-root:before': {
      borderBottomColor: '#4a7b65',
    },
  }}
/>
              <ToastContainer />
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <Filter />
              <Sort handleSort={handleSortValue} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {loading ? ( // Show spinner while loading
          <div className="row justify-content-center">
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
          </div>
        ) : (
          <>
            <div className="row">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
            <div className="row text-center">
              <Pagination
                count={Math.ceil(total / 30)}
                page={limit}
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Shop;
