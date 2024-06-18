import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px"
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className="navbar">
        <div className="logo">YASH</div>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <div className='underline'></div> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <div className='underline'></div> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=> setMenu("skills")}>Skills</p></AnchorLink>{menu === "skills" ? <div className='underline'></div> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=> setMenu("projects")}>Projects</p></AnchorLink>{menu === "projects" ? <div className='underline'></div> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <div className='underline'></div> : <></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>CONNECT</AnchorLink></div>
    </div>
  )
}
