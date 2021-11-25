import React from 'react';
import "./Skills.scss";
import { FormattedMessage } from 'react-intl';
import technologies from "./Technologies";


const Skills = () => {
    return (
        <div>
            <div className="tech-main">
                <h3><FormattedMessage
                id="technologies.title"
                defaultMessage="Technologies"
                />
                </h3>
                <div className="technologies"> 
                    {technologies.map((index) => {
                        return(
                            <div className="tech-card">
                            <img src={index.img} alt="tech" />
                            <p>{index.name}</p>
                            </div>
                    )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills
