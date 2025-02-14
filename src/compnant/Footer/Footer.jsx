
import React from "react";
import './footer.css'


const Footer = () => {
    return (
        <>
            <footer className=" flex  " style={{ justifyContent: "center" }}>
                <div className="buttom-section flex ">
                    <div>
                        <ul className="icons flex">
                            <li><a className=" icon icon-facebook" target="_blank"   href="https://www.facebook.com/profile.php?id=100034757147908"></a></li>
                            <li><a className=" icon icon-twitter" href="#"></a></li>
                            <li><a className=" icon icon-youetub" href="#"></a></li>
                            <li><a className=" icon icon-instagram" href="#"></a></li>
                            <li><a className=" icon icon-linkedin2"  target="_blank"  rel="noopener noreferrer"  href="https://www.linkedin.com/in/mohammed-magdy-798588269"></a></li>
                        </ul>
                    </div>
                    <p>©2023 All rights reserved. Created by Mohammed</p>
                </div>
            </footer>
        </>
    )
}
export default Footer;