import "./Product.css";
import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="product-info">
        <p>Khabib´s Gloves 6 October</p>
        <p className="product-price">
          <small>€</small>
          <strong>199,99</strong>
        </p>
      <div className="product-rating">
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
      </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/71gGKDXdoPL._AC_SX679_.jpg"
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
