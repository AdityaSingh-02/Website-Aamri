import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import WorkCardData from "../components/WorkCardData";
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
      <WorkCardData/>
      <Footer/>
    </div>
  )
}

export default Project
