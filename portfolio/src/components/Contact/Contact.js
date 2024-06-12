import React,{useRef} from 'react'
import './Contact.css';
import linkedin from '../../assets/linkedin.png'

import github from '../../assets/github.jpg'
import leetcode from '../../assets/leetcode.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_qha8bk7', 'template_bjqgh6l', form.current, {
            publicKey: 's9epzOBRRH252EOl7',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <a href='http://linkedin.com/in/devanshi-bhusari-622257148' target="blank" rel="nil">
                    <img src={linkedin} alt='linkedin' className="link"/>
                    </a>
                    
                    <a href='https://github.com/DevanshiB29' target="blank" rel="nil">
                    <img src={github} alt='github' className="link"/>
                    </a>
                    <a href='https://leetcode.com/u/spiker2001/' target="blank" rel="nil">
                    <img src={leetcode} alt='leetcode' className="link"/>
                    </a>
                </div>
            </form>
        </div>
    </section>   
  )
}

export default Contact
