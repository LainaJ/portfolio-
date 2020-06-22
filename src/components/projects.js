import React from "react"

const Projects = () => {
  return (
    <div className="project-section">
      <div className="container">
        <div className="project-heading">
          <h3>Projects</h3>
        </div>
        <div className="inner-project">
          <div className="video-player">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tDelWyMwB0A"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-content">
            <div className="content">
              <h4>Pomodoro</h4>
              <p>A time-management and productivity application inspired by the Pomodoro Technique</p>
            </div>
          </div>
        </div>
        {/* project 2 begin*/}
        <div className="inner-project">
          <div className="video-player">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XFmfwhXI2ps"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-content">
            <div className="content">
              <h4>Neopests</h4>
              <p>A game where users can adopts virtual pests, shop and play</p>
            </div>
          </div>
        </div>{" "}
        {/* project 3 begin*/}
        <div className="inner-project">
          <div className="video-player">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UMyVeURETLA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-content">
            <div className="content">
              <h4>NYC Underground</h4>
              <p>
                A city guide to NYC’s hidden underground tunnels, tours and
                attractions
              </p>
            </div>
          </div>
        </div>{" "}
        {/* end each project*/}
      </div>
      {/* end container div */}
    </div> //end project section
  )
}

export default Projects
