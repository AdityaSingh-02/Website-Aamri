import React from 'react'
import "./footerStyles.css";
import linkedImg from "../assets/linked-in.png";
import instaImg from "../assets/insta-icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
            <i className="fa fa-solid fa-home"></i>
            <div>
            <p>Rishikesh</p>
            <p>Uttarakhand</p>
            </div>
            </div>
            <div className="phone">
            <p className="phone-icon">☎</p>
            <h4>8279572550</h4>
            </div>
            <div className="email">
            <p className="email-icon">📧</p>
            <h4>guleriaaamri@gmail.com</h4>
            </div>
        </div>
        <div className="right">
            <h4>About me</h4>
            <p>Hey there, I'm Aamri Guleria.
              <br/>
                I'm pursuing Btech in Computer Science from DIT University,Dehradun.
                <br/>
                I'm currently in my second year. </p>
                <br/>
                <div className="link-insta">
                <a href="https://www.linkedin.com/in/aamri-guleria-712968223/" target="_blank"><img src={linkedImg} alt="linked-in icon" className="linked-in-icon"/></a>
                <a href="https://www.instagram.com/aamriguleria/?next=%2F" target="_blank"><img src={instaImg} alt="insta icon" className="insta-icon"/></a>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
