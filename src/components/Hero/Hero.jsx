import React from 'react'
import './Hero.css'
import Profile from '../../assets/Profile.jpg'

export const Hero = () => {
  return (
    <div id='home' className="hero">
        <img src={Profile} alt="" />
        <h1>Hi there! I'm <span>Yash</span></h1>
        <p>A Passionate <span>Full Stack Developer</span></p>
    </div>
  )
}
