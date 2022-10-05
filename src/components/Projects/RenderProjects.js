import githublogo from '../Footer/githublogo.png';
import demologo from '../Projects/demologo.png';

function RenderProjects({projects}){
    console.log(projects);
    return(
        <div className="projectsContainer">
            {
                projects.map((project) => {
                    return (
                        <div className="projectCard">
                            <h3 className="projectName">{project.summarized.name}</h3>
                            <img src={project.summarized.picture.project0pic} alt="" className="picture" />
                            <p className="summary">{project.summarized.summary}</p>
                            <div>
                                <a href={project.summarized.github} target='_blank' rel="noreferrer">
                                    <img src={githublogo} className='github' alt="github" />
                                </a>
                                <a href={project.summarized.demo} target='_blank' rel="noreferrer">
                                    <img src={demologo} alt="demo project" className="demo"/>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export {RenderProjects};