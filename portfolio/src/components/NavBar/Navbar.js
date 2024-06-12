import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.avif';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Works</Link>
            
           
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
        </button>
        </nav>

  )
}

export default Navbar
