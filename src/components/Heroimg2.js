import React from 'react'
import "./HeroimgStyles2.css";
const Heroimg2 = (props) => {
  return (
    <div className="hero-img">
      <div className="head">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Heroimg2
