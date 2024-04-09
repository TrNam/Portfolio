import React, { useState, useEffect } from "react";
import { projectsData, projectsNav } from "./Data";
import ProjectsItem from "./ProjectsItem";
import ProjectsModal from "./ProjectsModal";

const ProjectsContainer = () => {
    const [item, setItem] = useState({category: "all"});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [activeModalIndex, setActiveModalIndex] = useState(null);

    useEffect(() => {
        if(item.category === "all") {
            setProjects(projectsData);
        }else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.category;
            });
            setProjects(newProjects);
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({category: e.target.textContent.toLowerCase()});
        setActive(index);
    }

    const handleCardClick = (index) => {
        setActiveModalIndex(index);
    }
    return(
        <div>
            <div className="projects__filters">
                {projectsNav.map((item, index) => {
                    return <span 
                    onClick={(e) => {handleClick(e, index);}}
                    className={`projects__category ${active === index ? "active__category " : ""}`} key={index}>{item.category}
                    </span>
                })}
            </div>
            
            <div className="projects__container container grid">
                {projects.map((item, index) => {
                    return <ProjectsItem 
                    onClick={() => handleCardClick(index)}
                    item={item} key={item.id}
                    />
                })}
            </div>

            {activeModalIndex !== null && activeModalIndex < projects.length && (
                <ProjectsModal card={projects[activeModalIndex]}
                onClose={() => setActiveModalIndex(null)}/>
            )}
                
        </div>
    )
}

export default ProjectsContainer;