import React from "react";
import"./contant.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Contant = () =>{
    return (
        <>
        <div className="container ">
        <div className="parent parentContant flex " >
            <h1>Contact <span>Me</span></h1>
            <form className="flex " >
                <div >
                    <input className="" type="text" placeholder="Full Nmae" />
                    <input type="text" placeholder="Email address" />
                </div>
                <div>
                    <input type="text" placeholder="Mobile Number"/>
                    <input type="text" placeholder="Email Subject"/>
                </div>
                <div className="textarea">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}

export default Contant ;
