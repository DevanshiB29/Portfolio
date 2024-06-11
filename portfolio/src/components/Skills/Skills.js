import React from 'react'
import './Skills.css'
import frontend from '../../assets/frontend.png'
import backend from '../../assets/backend.png'
import testing from '../../assets/testing.png'
const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillsDec">Proficient in Java, JavaScript, HTML, CSS, and SQL for robust backend and frontend development. Skilled in Spring Boot, Angular16, ReactJS, and JUnit for efficient framework-driven application development. Experienced with Git, VS Code, Postman, Eclipse, and Selenium for streamlined development, testing, and automation.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={frontend} alt="frontend" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Frontend Development</h2>
                    <p>
                    Frontend developer skilled in JavaScript, HTML, CSS, Angular 16, ReactJS.
                    </p>
                </div>
            </div>  
            <div className="skillBar">
                <img src={backend} alt="backend" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Backend Development</h2>
                    <p>
                    Backend developer proficient in Java and Spring Boot and SQL.
                    </p>
                </div>
            </div>  
            <div className="skillBar">
                <img src={testing} alt="testing" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Automation Testing</h2>
                    <p>
                        
                        Experience in Automation Testing using Selenium.
                    </p>
                </div>
            </div>    
        </div>    
    </section>

  )
}

export default Skills
