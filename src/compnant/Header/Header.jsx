import React, { useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [showModel, setshowModel] = useState(false);
    return (
    <header className="flex">
        <h2>Portoflio</h2>
        <ul className="nav">
            <li>
                <NavLink to="/" >Home</NavLink>
            </li>
            <li>
                <Link to="/servies">Servies</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contant">Contant</Link>
            </li>
        </ul>
        <button
        onClick={() => {
            setshowModel(true);
        }}
        className="menu icon-menu "
        />

        {showModel && (
        <div className="fixed">
            <ul className=" model">
                <li>
                    <button
                        className=" icon-close btn-close "
                        onClick={() => {
                        setshowModel(false);
                        }}
                    > close
                    </button>
                </li>
                <li  onClick={() => {
                        setshowModel(false);
                        }}>
                <NavLink to="/" >Home</NavLink>
                  </li>
                <li  onClick={() => {
                        setshowModel(false);
                        }}>
                    <Link to="/servies">Servies</Link>
                </li>
                <li  onClick={() => {
                        setshowModel(false);
                        }}>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li  onClick={() => {
                        setshowModel(false);
                        }}>
                    <Link to="/about">About</Link>
                </li>
                <li  onClick={() => {
                        setshowModel(false);
                        }}>
                    <Link to="/contant">Contant</Link>
                </li>
            </ul>   
        </div>
        )}
    </header>
    )}

export default Header;
