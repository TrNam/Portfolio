import React from 'react';
import './skills.css';
import Fullstack from './Fullstack';
import IT from './IT';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Technical</span>
            <div className="skills__container container grid">
                <Fullstack/>
                <IT/>
            </div>
        </section>
    );
}

export default Skills;