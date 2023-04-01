import "./AboutContentStyles.css";
import React from 'react'
import {Link} from "react-router-dom";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
           <h1>Who I am?</h1> 
           <p>Hi! My Name is Aamri Guleria.😃</p>
           <p>I am a react Front-end developer.✌🏻 I create responsive, secure websites for my clients</p>
           <Link to="/contact">
            <button className="btn">Contact</button>
           </Link>
        </div>
        <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src="https://imgs.search.brave.com/MSYQG7xyx0SKRdQnnGjgwUg90wv8yQ5j6Z_ugwu1VzQ/rs:fit:854:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/WlVha3JvVzFfQ2p2/RzNaQUNQMWlRSGFF/SCZwaWQ9QXBp" className="img"/>
            </div>
            <div className="img-stack bottom">
                <img src="https://imgs.search.brave.com/jiBzWWpmXkTGSN1OZRUtfIe7z89Oc6W4Dso_ggSl8kQ/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/MkJRem5McjRUTU1p/RVZyV05TZHB3SGFF/SyZwaWQ9QXBp" className="img"/>
            </div>
            <div className="img-stack center">
                <img src="https://imgs.search.brave.com/u-wcXtz_6_d6QgNWi-s-jbe28oUVLfOs_fu-RS3EGF4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/elBmSEpBcVpZeFlI/MC1VekxqeGpRSGFF/SyZwaWQ9QXBp" className="img"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutContent
