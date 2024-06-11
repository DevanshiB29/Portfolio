import React from 'react'
import './Contact.css';
import linkedin from '../../assets/linkedin.png'
import email from '../../assets/mail.png'
import github from '../../assets/github.jpg'
import leetcode from '../../assets/leetcode.png'
const Contact = () => {
  return (
   <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={linkedin} alt='linkedin' className="link"/>
                    <img src={email} alt='email' className="link"/>
                    <img src={github} alt='github' className="link"/>
                    <img src={leetcode} alt='leetcode' className="link"/>

                </div>
            </form>
        </div>
    </section>   
  )
}

export default Contact
