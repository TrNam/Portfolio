import React from "react";

const ProjectsItem = ({item, onClick}) => {

    return (
        <div className="project__card" key={item.id} onClick={onClick}>
            <img src={item.image} alt="" className="project__img"/>
            <h3 className="project__title">{item.title}</h3>
            <span href="" className="project__button">
                Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
            </span>
        </div>
    )
}

export default ProjectsItem;