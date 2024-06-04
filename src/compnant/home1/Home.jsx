
import React from "react";
import "./home.css"

// var typed = new Typed(".multiple-text",{
//     string: ["Frontend Developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDalay:1000,
//     loop:true
// })
const Home = () => {
    return(
        
        <div className="container  ">
        <div className="parent parentH flex">
            <div className="left-section  ">
                <h3>Hello,it's Me</h3>
                <h1>Mohammed Magdy</h1>
                <h3>And i'm{" "} <span className="multiple-text">a Frontend Developer</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe illum?
                    Optio nam omnis numquam sint accusantium eos veniam obcaecati?
                </p>
                <ul className="icons flex">
                    <li><a className=" icon icon-facebook" href=""></a></li>
                    <li><a className=" icon icon-twitter" href=""></a></li>
                    <li><a className=" icon icon-instagram" href=""></a></li>
                    <li><a className=" icon icon-linkedin2" href=""></a></li>
                </ul>
                <button className="btn">Download CV</button>
        </div>
        <div className="right-section  ">
            <img className="avatar" src="../../images/home.png" alt="" />
        </div>
        </div>
        </div>
    )
}
        
export default Home;