import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby" 
import Image from "./image.js"


const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">Laina</div>
                    <div className="main-image">
                        <Image />
                            {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner