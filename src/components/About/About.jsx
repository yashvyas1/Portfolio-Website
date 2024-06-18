import React from 'react'
import './About.css'
import Profile from '../../assets/Profile.jpg'

export const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={Profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Recent graduate with a strong foundation in computer science and
                            practical knowledge in Java, SQL, React, JavaScript, and Advanced Java.
                            Possessing a robust understanding of software development principles
                            and a keen interest in applying these skills to real-world applications.
                            Seeking entry-level opportunities in software development to leverage my skills
                            and grow within a dynamic and innovative environment.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: '50%'}}/></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{width: '60%'}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width: '70%'}}/></div>
                        <div className="about-skill"><p>SQL</p><hr style={{width: '65%'}}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
