import React, { useState } from "react";
import "./servies.css";


const Servies = () => {
  const [carts, setCarts] = useState([{
    icon: "icon-embed2", name: "Web Development ", disc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
  asperiores architecto! Aliquam rerum eius hic beatae repudiandae
  voluptatem. Quidem, fuga?`},
  {
    icon: "icon-brush", name: "Graphic Design ", disc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
  asperiores architecto! Aliquam rerum eius hic beatae repudiandae
  voluptatem. Quidem, fuga?`},
  {
    icon: "icon-signal_cellular_alt", name: "Dodital marketing  ", disc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
  asperiores architecto! Aliquam rerum eius hic beatae repudiandae
  voluptatem. Quidem, fuga?`},])
  return (
    <>
      <div className="servies  ">
        <h1>
          Our <span> Services</span>
        </h1>
        <div className="carts">
          {carts.map((item) => (
            <div key={item.name} className="cart ">

              <i className={item.icon}></i>
              <h3>{item.name} </h3>
              <p>
                {item.disc}
              </p>
              <button className="btn">Read More</button>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Servies;
