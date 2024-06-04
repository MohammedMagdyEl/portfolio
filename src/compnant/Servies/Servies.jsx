import React from "react";
import "./servies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Servies = () => {
  return (
    <>
      <div className="containerServ container ">
        <h1>
          Our <span> Services</span>
        </h1>
        <div className="carts">
          <div className="cart ">
            <i className="icon-embed2"></i>
            <h3>Web Development </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              asperiores architecto! Aliquam rerum eius hic beatae repudiandae
              voluptatem. Quidem, fuga?
            </p>
            <button className="btn">Read More</button>
          </div>
          <div className="cart">
            <i className="icon-brush"></i>
            <h3>Graphic Design </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              asperiores architecto! Aliquam rerum eius hic beatae repudiandae
              voluptatem. Quidem, fuga?
            </p>
            <button className="btn">Read More</button>
          </div>
          <div className="cart">
            <i className="icon-signal_cellular_alt"></i>
            <h3>Dodital marketing </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              asperiores architecto! Aliquam rerum eius hic beatae repudiandae
              voluptatem. Quidem, fuga?
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servies;
