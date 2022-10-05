import project0pic from '../Projects/project0pic.png';

function AddProjectsHere(){
    const projects = 
    [
        {
        'summarized': {'name': 'Weather App', 'picture': {project0pic}, 'summary': 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        'github': 'https://github.com/Antoniue/Weather-Watcher', 'demo': 'https://antoniue.github.io/Weather-Watcher/'},

        'expanded': {'whyProject': 'lorem ipsum lorem ipsum lorem ipsum lorem', 'difficulties': 'lorem ipsum lorem ipsum', 'howDealt': 'lorem ipsum lorem ipsum lorem ipsum lorem', 'tools': 'test1 test2 test3 test4'}
        }
    ];
    return projects;
}
export {AddProjectsHere}