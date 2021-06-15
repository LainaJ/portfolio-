import React from "react"


// Socials
import instagram from "../images/instagram-icon.svg"
import github from "../images/github-icon.svg"
import linkedIn from "../images/linkedin-icon.svg"
import medium from "../images/medium-icon.svg"

const featured = [
//   { name: "CreativeBoom", image: creativeBoom },
//   { name: "Afropunk", image: afropunk },
//   { name: "WGSN", image: wgsn },
//   { name: "Vogue", image: vogue },
]

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        {/* <div className="container"> */}
            <a href="https://github.com/LainaJ">
              <img src={github} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/lainakarosic/">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
            <a href="https://medium.com/@lainakarosic">
              <img src={medium} alt="Medium" />
            </a>
          {/* <ul>
            {featured.map(({ name, image }) => (
              <li key="name">
                <img src={image} alt={name} />
              </li>
            ))}
          </ul> */}
        {/* </div> */}
      </div>
      <div className="footer">
        <hr/>
            <div className="copyright">
            <span>© 2020 Laina Karosic</span>
            </div>
      </div>
    </footer>
  )
}

export default Footer