import React from "react"
import { useStaticQuery, graphql } from "gatsby" 
import Img from "gatsby-image"
import { Link } from "gatsby"
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
                    <p>I'm a NYC-based software engineer.</p>
                    <div className="btn-row">
                        <Link to="/projects">View Projects</Link>
                    </div>
                </div>
                <div className="images">
                    <div className="top-right">
                        {/* potential image here */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )  

    }


export default AboutMe
