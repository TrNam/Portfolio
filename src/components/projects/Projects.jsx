import React from "react";
import './projects.css';
import ProjectsContainer from "./ProjectsContainer";

const Projects = () => {
    return(
        <section className="section projects" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Completed</span>
            <ProjectsContainer/>
        </section>
    )
}

export default Projects;