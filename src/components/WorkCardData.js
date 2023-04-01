import WorkData from "./Work";
import React from 'react'
import "./WorkCardStyles.css"
import {Link} from "react-router-dom"
const WorkCardData = () => {
  const trigger=(cmd)=>{
    
  }
  return (
    <>
    <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
    {
      WorkData.map((curelem)=>{
        const {id,title,text,img,prolink}=curelem;
        return (
          <>
              <div className="project-card" id={id}>
                <img src={img} className="image"/>
                <h2 className="project-title">{title}</h2>
                <div className="pro-details">
                  <p>{text}</p>
                  <div className="pro-btns">
                   <a href={prolink} target="_Blank" className="a-btn">View</a>
                  </div>
                </div>
              </div>
          </>
        );
      })
    }
    </div>
    </div>
    </>
  )
}

export default WorkCardData
