import ProductListing from "../components/ProductListing";
import Filter from "../components/Filter";
import Sort from "../components/Sort";


const Shop = () => {
  // You can implement infinite scroll logic here if needed

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex">
            <div className="col-md-6">
              <Filter />
            </div>
            <div className="col-md-6 me-auto">
              <Sort />
            </div>
          </div>
        </div>
      </div>
      <ProductListing />
    </>
  );
};

export default Shop;
