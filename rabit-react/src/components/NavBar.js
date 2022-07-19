import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [color,setBackground]=useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setBackground(true)

    } else {
      setBackground(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <nav className={color ? 'colorChange' : ''}>
      <div className="logo1">
        <Link to="/">
            Raabbit
        </Link>
         </div>
      <ul className="items">
        <li >
          <Link to="/" className="space">home</Link>
        </li>
        <li>
          <Link to="about" className="space">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
