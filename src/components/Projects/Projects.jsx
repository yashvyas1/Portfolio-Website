import React, { useId } from 'react'
import './Projects.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

export const Projects = () => {
    return (
        <div id='projects' className="projects">
            <div className="projects-title">
                <h1>My Projects</h1>
            </div>
            <div className="projects-container">
                {
                    mywork_data.map((project, index) => {
                        return <div key={index} className="project-format">
                            <img src={project.w_img} alt="Project-Img" />
                            <div className="layer">
                                <h3>{project.w_no}</h3>
                                <h2>{project.w_name}</h2>
                                <p>{project.w_desc}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="project-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}
