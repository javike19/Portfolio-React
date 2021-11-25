import React, { useState } from 'react';
import "./Projects.scss";
import { FormattedMessage } from 'react-intl';
import projects from "./ProjectsInfo";
import Modal from 'react-modal';
import AwesomeSlider from "react-awesome-slider"
import 'react-awesome-slider/dist/styles.css';

const Projects = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null);

    const expandModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    }

    
    
    return (
        <div className="projects-main-contain">
            <div className="projects-cards-contain">
                <h3><FormattedMessage
                id="projects.title"
                defaultMessage="Projects"
                />
                </h3>
                <div className="projects-contain">
                    {projects.map((project, index) => {
                        return (
                            <div className="project-contain">
                            <a onClick={() => expandModal(project)} href>
                            <div className="project-items"  key={index}>
                                <h4 title={project.title}>{project.title}</h4>
                                <img src={project.images} alt={project.title} />
                                <p>{project.startDate}</p>
                            </div>
                            </a>
                            </div>
                            
                        )
                        
                    })}
                </div>
                    <Modal className="modal-content" isOpen={modalIsOpen} >
                    <button className="closebtn" onClick={() => setModalIsOpen(false)}>X</button>
                    <div className="modal-contain">
                        <h3>{selectedProject && selectedProject.title}</h3>
                        <AwesomeSlider>
                        {selectedProject && selectedProject.images.map((pic) => {
                            return (
                                <div className="carousel">
                                    <div>
                                    <img className="pic-carousel" src={pic} alt={pic} />
                                    </div>
                                </div>
                            )
                        })}
                        </AwesomeSlider>
                        <p className="startdate">Start: {selectedProject && selectedProject.startDate}</p>
                            <div className="techs-contain">
                            {selectedProject && selectedProject.technologies.map((tech) => {
                                return (
                                    <div className="tech-contain">
                                    <img src={tech.class} alt={tech.name} />
                                    <p>{tech.name}</p>
                                    </div>
                                )
                            })}
                            </div>
                        <a className="link-project" href={selectedProject && selectedProject.url}><p>🔗 {selectedProject && selectedProject.url}</p></a>
                        </div>
                    </Modal>
            </div>
        </div>
    )
}

export default Projects
