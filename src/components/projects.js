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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tDelWyMwB0A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        <div className="video-content">
          <div className="content">
          <h4>Pomodoro</h4>
            <p>
            A time-management and productivity application inspired by the Pomodoro Technique
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects