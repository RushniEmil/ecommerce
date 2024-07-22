import { useCart } from "use-cart"; // Import useCart hook for cart functionality

const Product = ({ product }) => {
  const { addItem } = useCart(); // Destructure addItem function from useCart hook

  return (
    <>
      <div className="col-12 col-md-4 col-lg-3 mb-5 ">
        {/* Link to the product details page */}
        <a className="product-item" href="#">
          <div className="d-flex flex-column ">
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
            {/* Button to add the product to the cart */}
            <button
              className="btn btn-black btn-lg py-3 btn-block mt-3"
              onClick={() => addItem(product)}
            >
              Add to Cart
            </button>
          </div>
        </a>
      </div>
    </>
  );
};

export default Product;
