import React, { useState } from 'react';
import './qualifications.css';

function Qualifications() {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="section qualification" id="work">
        <h2 className="section__title">Work & Education</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">

                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon">Experience</i>
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon">Education</i>
                </div>
            </div>

            <div className="qualification__sections">

                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Student IT Support Volunteer</h3>
                            <span className="qualification__subtitle">British Columbia Institute of Technology</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">2022-Present</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Software QA Engineer</h3>
                            <span className="qualification__subtitle">Gravit-e Technologies</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">2019-2019</i>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">IT Support Specialist</h3>
                            <span className="qualification__subtitle">FV Hospital</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">2018-2018</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            {/* <span className="qualification__line"></span> */}
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Science Bachelors Degree</h3>
                            <span className="qualification__subtitle">British Columbia Institute of Technology</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">2020-2024</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            {/* <span className="qualification__line"></span> */}
                        </div>

                        <div>
                            <h3 className="qualification__title">Computer Information Technology</h3>
                            <span className="qualification__subtitle">British Columbia Institute of Technology</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">2017-2020</i>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
  );
}

export default Qualifications;