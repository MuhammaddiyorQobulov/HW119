import Button from "../button/button";
import "./glassesGirl.css";
import glassesGirl from "../../images/products/glassesGirl.png";

function GlassesGirl() {
  return (
    <div className="glassesGirl">
      <img src={glassesGirl}></img>

      <div className="glasses-right">
        <h1>
          Lagenlook <br /> fashion style.
        </h1>
        <p>Sales upto 30% Discount</p>
        <Button title="Buy Now" />
      </div>
    </div>
  );
}

export default GlassesGirl;
