import React, { useState } from "react";
import girl1 from "../../images/trending/girl1.png";
import girl2 from "../../images/trending/girl2.png";
import Button from "../button/button";
import "./empire.css";
function Empire() {
  const [title] = useState([
    {
      img: girl1,
    },
    { img: girl2 },
  ]);
  return (
    <div className="empire">
      <div className="empire-header">
        <h2>Trending This Month</h2>
        <p>See All Products <i class="fa-light fa-circle-left"></i><i class="fa-light fa-circle-right"></i></p>
      </div>
     <div className="waistDress">
      {title.map((item) => (
        <div className="waist">
          <div>
            <h2>Empire Waist Dress</h2>
            <p>
              The dress gathers under the bust at the <br />
              slimmest part of the torso
            </p>
            <nav>
              4.9 <i class="fa-solid fa-star"></i>
              <span> 50+ Reviews</span>
            </nav>
            <article>
              $12 <del>$15.00</del>
            </article>
            <Button title="Buy Now" />
            <button className="like"><i class="fa-regular fa-heart"></i></button>
          </div>
          <div>
            <img src={item.img}></img>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Empire;
