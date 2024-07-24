import { useCart } from 'react-use-cart';
import Star from '../components/Star';

const Product = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5">
      {/* Link to the product details page */}
      <a className="product-item  " href="#">
        <div className="d-flex flex-column align-items-center">
          {/* Product thumbnail image */}
          <img
            src={product.thumbnail}
            className="img-fluid product-thumbnail"
            alt={product.title}
          />
          {/* Product title */}
          <h3 className="product-title text-center">
            {product.title}
          </h3>
          {/* Product price */}
          <strong className="product-price text-center">
            {product.price}$
          </strong>
          {/* Star rating component */}
          <Star rating={product.rating}  />
          {/* Button to add the product to the cart */}
          <button
            className="btn btn-black py-3 btn-block mt-3 mx-auto"
            onClick={() => addItem(product)}
          >
            Add to Cart
          </button>
        </div>
        
        
       
      </a>
    </div>
  );
};

export default Product;
