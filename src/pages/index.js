import React from "react"
import '../styles/styles.scss'
import scrollTo from 'gatsby-plugin-smoothscroll';
import SmoothScrollbar from "smooth-scrollbar";

//Import Components
import Header from '../components/header.js'
import Banner from '../components/banner.js'
import AboutMe from '../components/aboutMe.js'
import Footer from '../components/footer.js'
import Projects from '../components/projects.js'

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutMe />
    <Projects />
    <Footer />
  </div>
)

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default IndexPage
