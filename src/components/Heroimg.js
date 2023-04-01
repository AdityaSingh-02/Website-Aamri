import "./HeroimgStyles.css";
import React from 'react'
import "../index.css"
import {Link} from "react-router-dom";
import IntroImg from "../assets/intro-bg-new.jpg"
const Heroimg= () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p><span id="hi">HI,</span> I'M A</p>
        <p className="two">
          Creative
        </p>
        <p className="three">FRONTEND DEVELOPER</p>
        <h1>React Developer</h1>
        <Link to="/project" className="btn">
        Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
        Contact
        </Link>
      </div>
    </div>
  )
}

export default Heroimg;
