import { RenderIndividualProject } from "./RenderIndividualProject";
function RenderProjects({projects}){
    return(
        <div className="projectsContainer">
            {
                projects.map((project) => {
                    return (
                        RenderIndividualProject(project)
                    )
                })
            }
        </div>
    )
}
export {RenderProjects};