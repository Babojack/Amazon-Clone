import "./Product.css";
import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="div product-info">
        <p>The lean Startup</p>
        <p className="product-prise">
          <small>€</small>
          <strong>19,99</strong>
        </p>
      </div>
      <div className="product-rating">
        <p></p> 
      </div>
      <img
        src="https://m.media-amazon.com/images/I/71gGKDXdoPL._AC_SX679_.jpg"
        alt=""
      />
    </div>
  );
}

export default Product;
