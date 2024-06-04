

import React from "react";
import "./about.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const About = () => {
    return(
        <>
        <div className="container  ">
        <div className="parent flex">
            <img className="avatar" src="../../images/about.png" alt="" />
            <div className="right-section   flex">
            <h1>About <span>Me</span></h1>
            <h3>Frontend Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur laboriosam sequi assumenda voluptates aliquam eligendi, 
                mollitia illum cumque error reiciendis. Eius, nesciunt! 
                Labore, dignissimos harum quo blanditiis commodi fugit error?
            </p>
            <button className="btn">Read More</button>
            </div>
        </div>
        </div>
        </>
    );
}
export default About;