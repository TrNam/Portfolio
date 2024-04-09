import React from "react";

const ProjectsModal = ({card, onClose}) => {
    if (!card) {
        return null;
    }
    return (
        <div className="project__modal">
            <div className="project__modal-content">
                <i className="uil uil-times project__modal-close" onClick={onClose}></i>
                <h3 className="project__modal-title">{card.title}</h3>
                <video width="100%" height="300px" controls loop className="project__modal-video">
                    <source src={card.video} type="video/mp4" />
                </video>
                <a href={card.github} target="_blank" className="project__modal-link">{card.github}</a>
                <div className="project__modal-container">
                    <p className="project__modal-description">
                        {card.description}
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectsModal;