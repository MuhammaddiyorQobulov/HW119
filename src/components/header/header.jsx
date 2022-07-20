import React,{useState} from "react";
import Button from "../button/button";
import "../../components/header/header.css"
import logo from "../../images/header/logo.png";
import headerGirl from "../../images/header/Group 933.png";
import delivery from "../../images/header/Group 898.png";
import guaranty from "../../images/header/Group (1).png";
import support from "../../images/header/support.png";

function Header() {
    const [service]=useState([
        {img: delivery,
    h1:"Fast & Free Delivery",
    p:"Free delivery for all orders over $140"
    },
        {img:guaranty,
    h1:"Money Back Guarantee",
    p:"We return money within 30 days"
    },
        {img:support,
    h1:"24/7 Customer Support",
    p:"friendly 24/7 customer support"
    }
    ])
    return <div className="header">
        <div className="navbar">
            <img src={logo} alt="" />
            <ul>
                <li>Products </li>
                <li>Shop</li>
                <li>Collections</li>
                <li>About Us</li>
                <li>Contact</li> 
            </ul>
            <div className="icons">
                <ul>
                    <li><i class="fa-solid fa-magnifying-glass"></i></li>
                    <li><i class="fa-regular fa-user"></i></li>
                    <li><i class="fa-regular fa-heart"></i></li>
                    <li><i class="fa-regular fa-bag-shopping"></i></li>
                </ul>
            </div>
        </div>
        <div className="head">
            <div className="header-top">
             <div className="header-left">
                <h6>New Arrival</h6>
                <h1>New Fashion</h1>
                <h1>Collection</h1>
                <h1>Trends in 2022</h1>
                <p>Whether you're in the mood for fashion tricks, outfit ideas, industry 
                    <br></br> news, celebrity street style, simply want to know latest styles.</p>
                {<Button title="Shop Now"/>}
             </div>
             <div className="header-right">
                <img className="header-girl" src={headerGirl} alt="" />
             </div>
            </div>
        <div className="header-footer">
    {service.map((ser)=>(
    <div className="ser">
         <img src={ser.img} alt="" />
         <div>
           <h4>{ser.h1}</h4>
           <nav>{ser.p}</nav>
         </div>
       </div>
    ))}
        </div>


        </div>

    </div>;
  }
  
  export default Header;
  