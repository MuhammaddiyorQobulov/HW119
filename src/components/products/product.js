import React, { useState } from "react";
import Button from "../button/button";
// import "./products.css";
import "./product.css";
import img1 from "../../images/products/img1.png";
import img2 from "../../images/products/img2.png";
import img3 from "../../images/products/img3.png";
import img4 from "../../images/products/img4.png";
function Product() {
  const [title] = useState([
    {
      img: img1,
      massage: "Handstich Cotton High Quality Un-Stitched Salwar Kamiz",
      cost: "$12.00",
    },
    {
      img: img2,
      massage: "Handstich Cotton High Quality Un-Stitched Salwar Kamiz",
      cost: "$12.00",
    },
    {
      img: img3,
      massage: "Handstich Cotton High Quality Un-Stitched Salwar Kamiz",
      cost: "$12.00",
    },
    {
      img: img4,
      massage: "Handstich Cotton High Quality Un-Stitched Salwar Kamiz",
      cost: "$12.00",
    },
  ]);
  return (
    <div className="products">
      {title.map((item) => (
        <div className="product">
          <img src={item.img}></img>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <nav>50+ Reviews</nav>
          </div>
          <p>{item.massage}</p>
          <article>
            {item.cost} <del>$15.00</del>
          </article>
          <Button title="Add To Cart" />
        </div>
      ))}
    </div>
  );
}

export default Product;
