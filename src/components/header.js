import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div classname="container">
      <div classname="logo">
        <Link to= "/">Laina Karosic</Link>
      </div>
      <div classname="navigation">
        <nav>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>

        </nav>
      </div>
    </div>
  </header>
)


export default Header
