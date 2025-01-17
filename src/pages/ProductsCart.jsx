import { useCart } from "react-use-cart";
import React, { useState } from "react";

const ProductCart = () => {
  // Extract useCart functions
  const { isEmpty, items, updateItemQuantity, removeItem, addItem } = useCart();

  // Handler to remove an item from the cart
  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  // Handler to update the quantity of an item
  const handleUpdateItemQuantity = (itemId, quantity) => {
    updateItemQuantity(itemId, quantity);
  };

  // Check if the cart is empty
  const cartIsEmpty = isEmpty || items.length === 0;
  if (cartIsEmpty) return <p>Your cart is empty</p>;

  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="product-thumbnail">
                        <img
                          src={item.thumbnail}
                          alt="Product Image"
                          className="img-fluid"
                        />
                      </td>
                      <td className="product-name">
                        <h2 className="h5 text-black">{item.title}</h2>
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <div
                          className="input-group mb-3 d-flex align-items-center quantity-container"
                          style={{ maxWidth: "120px" }}
                        >
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-black decrease"
                              type="button"
                              onClick={() =>
                                handleUpdateItemQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                            >
                              &minus;
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control text-center quantity-amount"
                            value={item.quantity}
                            readOnly
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-black increase"
                              type="button"
                              onClick={() =>
                                handleUpdateItemQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                            >
                              &#43;
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn btn-black btn-sm"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-black btn-sm btn-block">
                  Update Cart
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-black btn-sm btn-block">
                  Continue Shopping
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" htmlFor="coupon">
                  Coupon
                </label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control py-3"
                  id="coupon"
                  placeholder="Coupon Code"
                />
              </div>
              <div className="col-md-4">
                <button className="btn btn-black">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">
                      Cart Totals
                    </h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">
                      $
                      {items
                        .reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">
                      $
                      {items.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )}
                    </strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-black btn-lg py-3 btn-block">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
