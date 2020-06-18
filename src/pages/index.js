import React from "react"
import '../styles/styles.scss'

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

export default IndexPage
