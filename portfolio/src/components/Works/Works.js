import React from 'react'
import './Works.css'
import landing from '../../assets/landingpage.png'
import dashboard from '../../assets/dashboard.png'
import patientdashboard from '../../assets/patientdashboard.png'
const Works = () => {
  return (
   <section id='works'>
    <h2 className="worksTitle" >My Portfolio</h2>
    <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help achieve their goals and create a strong online presence.</span>
    <div className="worksImgs">
        <img src={landing} alt="landing page" className="worksImg"/>
        <img src={dashboard} alt="" className="worksImg"/>
        <img src={patientdashboard} alt='' className="worksImg"/>
    </div>
   </section>
  )
}

export default Works
