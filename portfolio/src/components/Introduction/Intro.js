import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
           <span className="hello">Hello,</span>
           <span className="introText">I'm<span className="introName"> Devanshi</span><br />Software Engineer</span> 
           <p className="introPara">I am a software engineer equipped with foundational knowledge, eager to contribute to designing and developing software systems.</p>
           <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>      
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro
