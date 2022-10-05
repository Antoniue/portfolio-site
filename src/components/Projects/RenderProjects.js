import githublogo from '../Footer/githublogo.png';
import demologo from '../Projects/demologo.png';

function RenderProjects({projects}){
    console.log(projects);
    return(
        <div className="projectsContainer">
            <div className="projectCard">
                <h3 className="projectName">{projects[0].summarized.name}</h3>
                <img src={projects[0].summarized.picture.project0pic} alt="" className="picture" />
                <p className="summary">{projects[0].summarized.summary}</p>
                <a href={projects[0].summarized.github} target='_blank' rel="noreferrer">
                    <img src={githublogo} className='github' alt="github" />
                </a>
                <a href={projects[0].summarized.demo} target='_blank' rel="noreferrer">
                    <img src={demologo} alt="demo project" className="demo"/>
                </a>
            </div>
        </div>
    )
}
export {RenderProjects};