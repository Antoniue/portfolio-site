import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import '../Projects/Projects.css';
import { RenderProjects } from './RenderProjects';
import project0pic from '../Projects/project0pic.png';
function Projects(){
    const projects = 
    [
        {
        'summarized': {'name': 'Weather App', 'picture': {project0pic}, 'summary': 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        'github': 'https://github.com/Antoniue/Weather-Watcher', 'demo': 'https://antoniue.github.io/Weather-Watcher/'},

        'expanded': {'whyProject': 'lorem ipsum lorem ipsum lorem ipsum lorem', 'difficulties': 'lorem ipsum lorem ipsum', 'howDealt': 'lorem ipsum lorem ipsum lorem ipsum lorem', 'tools': 'test1 test2 test3 test4'}
        }
    ];
    return(
        <div className="content">
            <Header navlist={['Home', 'About', 'Contact']}/>
            <div className="projectsSpace">
                <h1>Projects</h1>
                <RenderProjects projects={projects}/>
            </div>
            <Footer />
        </div>
    )
}
export {Projects};