import "./NavbarStyles.css"
import IconImg from "../assets/icon2.png"
import React,{useState} from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  const [name,setname]=useState(false);
  const [color,setcolor]=useState(false);
  const changecolor=()=>{
    if(window.scrollY>=100){
      setcolor(true);
    }
    else{
      setcolor(false);
    }
  }
  window.addEventListener("scroll",changecolor);
  const handleClick=()=>{
    setname(!name);
  }
  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
        <h1><img src={IconImg} className="icon2"/> portfolio</h1>
      </Link>
      <ul className={name?"nav-menu active":"nav-menu"}>
        <li className="ports ports-home">
            <Link to="/">Home</Link>
        </li>
        <li className="ports ports-about">
            <Link to="/about">About</Link>
        </li>
        <li className="ports ports-project">
            <Link to="/project">Project</Link>
        </li>
        <li className="ports ports-contact">
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {name?(<h4 className="cross">✖</h4>):(<i className="fa fa-solid fa-bars"></i>)}
      </div>
      
    </div>
  )
}

export default Navbar
