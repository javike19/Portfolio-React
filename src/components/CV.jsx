import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./CV.scss";

const CV = () => {
    return (
        <div className="cv-contain">
            <div>
                <h3>
                <FormattedMessage
                id="experience.title"
                defaultMessage="Experience"
                />
                </h3>
            </div>
            <a href="https://javike19.github.io/CV-React/">
            <p>🡲 
                 <FormattedMessage
                id="CV.link"
                defaultMessage="CV Online" />🡰
            </p>
            </a>
            <div className="timeline-contain">
                <ul className="list-contain">
                    <li className="education-li">
                        <div>
                            <p className="title-experience">
                                <FormattedMessage
                                id="education.1"
                                defaultMessage="education.1" />
                            </p>
                            <p className="data-experience">
                            <FormattedMessage
                                id="school.1"
                                defaultMessage="school.1" />
                            </p>
                            <p className="year-experience">
                            <FormattedMessage
                                id="final.year.5"
                                defaultMessage="final.year.5" />
                            </p>
                        </div>
                    </li>
                    <li className="education-li">
                        <div>
                            <p className="title-experience">
                                <FormattedMessage
                                id="education.2"
                                defaultMessage="education.2" />
                            </p>
                            <p className="data-experience">
                            <FormattedMessage
                                id="school.2"
                                defaultMessage="school.2" />
                            </p>
                            <p className="year-experience">
                            <FormattedMessage
                                id="final.year.6"
                                defaultMessage="final.year.6" />
                            </p>
                        </div>
                    </li>
                    <p className="year-title">2021</p>
                    <li className="work-li">
                        <div>
                            <p className="title-experience">
                                <FormattedMessage
                                id="work.2"
                                defaultMessage="work.2" />
                            </p>
                            <p className="data-experience">
                            <FormattedMessage
                                id="work.experience.2"
                                defaultMessage="work.experience.2" />
                            </p>
                            <p className="year-experience">
                            <FormattedMessage
                                id="final.year.2"
                                defaultMessage="final.year.2" />
                            </p>
                        </div>
                    </li>
                    <p className="year-title">2020</p>
                    <li className="work-li">
                        <div>
                            <p className="title-experience">
                                <FormattedMessage
                                id="work.1"
                                defaultMessage="work.1" />
                            </p>
                            <p className="data-experience">
                            <FormattedMessage
                                id="work.experience.1"
                                defaultMessage="work.experience.1" />
                            </p>
                            <p className="year-experience">
                            <FormattedMessage
                                id="final.year.1"
                                defaultMessage="final.year.1" />
                            </p>
                        </div>
                    </li>
                    <li className="education-li">
                        <div>
                            <p className="title-experience">
                                <FormattedMessage
                                id="education.3"
                                defaultMessage="education.3" />
                            </p>
                            <p className="data-experience">
                            <FormattedMessage
                                id="school.3"
                                defaultMessage="school.3" />
                            </p>
                            <p className="year-experience">
                            <FormattedMessage
                                id="final.year.7"
                                defaultMessage="final.year.7" />
                            </p>
                        </div>
                    </li>
                    <li className="education-li">
                        <div>
                            <p className="title-experience">
                                <FormattedMessage
                                id="education.4"
                                defaultMessage="education.4" />
                            </p>
                            <p className="data-experience">
                            <FormattedMessage
                                id="school.4"
                                defaultMessage="school.4" />
                            </p>
                            <p className="year-experience">
                            <FormattedMessage
                                id="final.year.8"
                                defaultMessage="final.year.8" />
                            </p>
                        </div>
                    </li>
                    <p className="year-title">2018</p>
                    <li className="work-li">
                        <div>
                            <p className="title-experience">
                                <FormattedMessage
                                id="work.3"
                                defaultMessage="work.3" />
                            </p>
                            <p className="data-experience">
                            <FormattedMessage
                                id="work.experience.3"
                                defaultMessage="work.experience.3" />
                            </p>
                            <p className="year-experience">
                            <FormattedMessage
                                id="final.year.3"
                                defaultMessage="final.year.3" />
                            </p>
                        </div>
                    </li>
                    <p className="year-title">2017</p>
                    <li className="work-li">
                        <div>
                            <p className="title-experience">
                                <FormattedMessage
                                id="work.4"
                                defaultMessage="work.4" />
                            </p>
                            <p className="data-experience">
                            <FormattedMessage
                                id="work.experience.4"
                                defaultMessage="work.experience.4" />
                            </p>
                            <p className="year-experience">
                            <FormattedMessage
                                id="final.year.4"
                                defaultMessage="final.year.4" />
                            </p>
                        </div>
                    </li>
                    <p className="year-title">2007</p>
                </ul>
            </div>
        </div>
    )
}

export default CV
