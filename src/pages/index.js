import React from "react"
import '../styles/styles.scss'

//Import Components
import Header from '../components/header.js'
import Banner from '../components/banner.js'
import AboutMe from '../components/aboutMe.js'


const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutMe />
  </div>
)

export default IndexPage
