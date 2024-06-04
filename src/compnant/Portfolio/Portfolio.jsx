import React from "react";
import "./portfolio.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Portfolio = () => {
  return (
    <>
      <div className="containerProj container">
        <h1>
          Lastest <span> Projects</span>
        </h1>
        <div className="carts">
          <div className="cart  ">
            <img
              src="../../images/portfolio1.b65d3404bdcc4ee8a852.jpg"
              alt=""
            />
            <div className="textCart">
              <h3>TASAMI</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, quis.
              </p>
            </div>
          </div>
          <div className="cart  ">
            <img
              src="../../images/portfolio2.b125d1148fc72d7d00a3.jpg"
              alt=""
            />
            <div className="textCart">
              <h3>ISG-CONPANY</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, quis.
              </p>
            </div>
          </div>
          <div className="cart  ">
            <img
              src="../../images/portfolio3.8186df376b322a283488.jpg"
              alt=""
            />
            <div className="textCart">
              <h3>ALMENTOR</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, quis.
              </p>
            </div>
          </div>
          <div className="cart  ">
            <img
              src="../../images/portfolio4.eaddd3f1956ae7b3ac39.jpg"
              alt=""
            />
            <div className="textCart">
              <h3>MATRIXG</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, quis.
              </p>
            </div>
          </div>
          <div className="cart  ">
            <img
              src="../../images/portfolio5.80291050be88a205c33f.jpg"
              alt=""
            />
            <div className="textCart">
              <h3>CONSULT-INFO</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, quis.
              </p>
            </div>
          </div>
          <div className="cart  ">
            <img
              src="../../images/portfolio6.cfffe2ca4e775e909071.jpg"
              alt=""
            />
            <div className="textCart">
              <h3>LEON TEMPLATE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Portfolio;
