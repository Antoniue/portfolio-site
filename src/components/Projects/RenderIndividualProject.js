import React, { useState } from 'react';
import githublogo from '../Footer/githublogo.png';
import demologo from '../Projects/demologo.png';
import Modal from '../Projects/Modal'
import jslogo from '../About/jslogo.svg';
import htmllogo from '../About/htmllogo.ico';
import expresslogo from '../About/expresslogo.webp';
import csslogo from '../About/csslogo.webp';
import mongodblogo from '../About/mongodblogo.webp';
import nodejslogo from '../About/nodejslogo.webp';
import gitlogo from '../About/gitlogo.svg';
import npmlogo from '../About/npmlogo.webp';
import reactlogo from '../About/reactlogo.webp';
import webpacklogo from '../About/webpacklogo.webp';

function RenderIndividualProject(project){
    const [isOpen, setIsOpen] = useState(false);

    function HandleTools({tools}){
        return (
            <div className="toolsContainer">
                {
                    tools.map((tool) => {
                        return(
                            <img src={tool} alt={tool} className="toolLogo"/>
                        )
                    })
                }
            </div>
        )
    }

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
                <h5 className="modalH1">Why did I choose to do this project?</h5>
                <p className="modalText">{project.expanded.whyProject}</p>
                <h5 className="modalH1">What difficulties did I face?</h5>
                <p className="modalText">{project.expanded.difficulties}</p>
                <h5 className="modalH1">How did I deal with these difficulties?</h5>
                <p className="modalText">{project.expanded.howDealt}</p>
                <h5 className="modalH1">Tools:</h5>
                <HandleTools tools={project.expanded.tools}/>
            </Modal>
        </div>
    </div>
    )
}
export {RenderIndividualProject};