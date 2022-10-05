import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import '../Projects/Projects.css';
import { AddProjectsHere } from './AddProjectsHere';
import { RenderProjects } from './RenderProjects';

function Projects(){
    return(
        <div className="content">
            <Header navlist={['Home', 'About', 'Contact']}/>
            <div className="projectsSpace">
                <h1>Projects</h1>
                <RenderProjects projects={AddProjectsHere()}/>
            </div>
            <Footer />
        </div>
    )
}
export {Projects};