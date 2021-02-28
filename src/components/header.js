import { Link } from "gatsby"
import React from "react"
import SmoothScrollbar from "smooth-scrollbar"
import '../styles/styles.scss'
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = () => (
 
  <header >
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">LK</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="#about-me">About</Link>
            <Link to="#projects">Projects</Link>
            <Link to="#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)


export default Header
