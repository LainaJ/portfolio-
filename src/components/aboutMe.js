import React from "react"
import { useStaticQuery, graphql } from "gatsby" 
import Img from "gatsby-image"
import { Link } from "gatsby"
import Portrait from "../images/portrait.jpg"
import '../styles/styles.scss'

const AboutMe = () => {

    //add image here later
    // const data = useStaticQuery(graphql`
    // query {

    // }
    // `)
    return (
    <div className="about-me">
        <div className="container">
            <div className="inner-about">
                <div className="content">
                    <h3>About Me</h3>
                    <p>I'm a NYC-based software developer with a passion for building beautiful & functional websites. My background experience in the medical field entailed designing and building customized solutions and assistive technology for clients. Driven to create meaningful products with attentiveness to user experience. 
                    </p>
                    <div className="btn-row">
                        <Link to="/projects">View Projects</Link>
                    </div>
                </div>
                <div className="images">
                    <div className="main-image">
                    <img src={Portrait} alt="portrait" />
                            {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )  

    }


export default AboutMe
