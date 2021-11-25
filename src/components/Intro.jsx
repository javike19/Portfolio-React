import React from 'react';
import "./Intro.scss";
import { FormattedMessage } from 'react-intl';
import profilepic from "../assets/images/profile.png";
import 'animate.css';


const Intro = () => {
    return (
        <div className="intro-contain">
            <div className="intro-title">
                <h1 className="animate__pulse">
                    <FormattedMessage
                    id="name"
                    defaultMessage="Javier Moreno"
                    />
                </h1>
                <h2>
                    <FormattedMessage
                    id="profession"
                    defaultMessage="Full Stack Developer"
                    />
                </h2>
            </div>
            <div className="intro-info-pic">
                <div className="intro-info">
                    <p className="title-info">
                        <FormattedMessage
                        id="info.title"
                        defaultMessage="Who I am?"
                        />
                    </p>
                    <p className="description-info">
                        <FormattedMessage
                        id="info.description"
                        defaultMessage="I'm Javier from Madrid. Full Stack Junior Developer."
                        />
                    </p>
                </div>
                <div className="intro-pic">
                    <img src={profilepic} alt="me" />
                </div>
            </div>
        </div>
    )
}

export default Intro
