import "./Home.css";
import React from "react";
import Product from './Product.js'

function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61ATFA5aSoL._SX3740_.jpg"
          alt=""
        />
        <div className="div home_row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="div home_row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="div home_row">
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
