import project0pic from '../Projects/project0pic.png';
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


function AddProjectsHere(){
    const projects = 
    [
        {
            'summarized': {'name': 'Weather App', 'picture': {project0pic},
            'summary': 'A weather app where you can search a city and get weather data regarding that city',
            'github': 'https://github.com/Antoniue/Weather-Watcher',
            'demo': 'https://antoniue.github.io/Weather-Watcher/'},
    
            'expanded': {'whyProject': 'I wanted to practice fetching data from an API and using it',
            'difficulties': "I didn't have major difficulties, only minor ones regarding the API itself",
            'howDealt': 'I had to revisit some documentation on fetching data from the specific API (OpenWeatherMap)',
            'tools':
                [
                    {'src': jslogo, 'name': 'javascript'},
                    {'src': htmllogo, 'name': 'HTML'},
                    {'src': csslogo, 'name': 'CSS'}
                ],
            }
        }
    ];
    return projects;
}
export {AddProjectsHere}