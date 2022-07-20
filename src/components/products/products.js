import React, { useState } from "react";
import Button from "../button/button";
import Product from "../products/product";
import "./products.css"
function Products(props) {
  return (
    <div className="products-section">
      <div className="products-header">
        <h1>{props.title}</h1>
        <p>
          See All Products <i class="fa-light fa-circle-left"></i>
          <i class="fa-light fa-circle-right"></i>
        </p>
      </div>
        <Product />
    </div>
  );
}

export default Products;
