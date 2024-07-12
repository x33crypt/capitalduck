import React from "react";
import "./nav.css";
import duckImage from "../assets/original-7865f4de79a58ed89ca58662a76d8161-removebg-preview.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="navLeft">
        <p>Capital Duck</p>
        <img src={duckImage} alt="" />
      </div>
      <div className="navRight">
        <p>Community</p>
        <p>FAQ</p>
        <button>Launch Bot</button>
      </div>
    </div>
  );
};

export default Nav;
