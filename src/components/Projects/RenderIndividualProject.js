import React, { useState } from 'react';
import githublogo from '../Footer/githublogo.png';
import demologo from '../Projects/demologo.png';
import Modal from '../Projects/Modal'

function RenderIndividualProject(project){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="projectCard">
        <h3 className="projectName">{project.summarized.name}</h3>
        <img src={project.summarized.picture.project0pic} alt="" className="picture" />
        <p className="summary">{project.summarized.summary}</p>
        <div className='projectButtons'>
            <a href={project.summarized.github} target='_blank' rel="noreferrer">
                <img src={githublogo} className='github' alt="github" />
            </a>
            <a href={project.summarized.demo} target='_blank' rel="noreferrer">
                <img src={demologo} alt="demo project" className="demo"/>
            </a>
            <button className='expandButton' onClick={() => setIsOpen(true)}>Expand</button>
            <Modal open={isOpen} closeModal={() => setIsOpen(false)}>
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quod.</div>
            </Modal>
        </div>
    </div>
    )
}
export {RenderIndividualProject};