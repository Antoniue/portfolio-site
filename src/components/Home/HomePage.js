import stars from '../Home/stars.png';
import { NavLink } from 'react-router-dom'

import '../Home/HomePage.css';
function HomePage(){
    return (
        <div style={{
            backgroundImage: "url("+stars+")",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            }}>
            <div className="content">
                <div className="welcomeMessage">
                    <h2>Hello! I'm </h2>
                    <h1 className='nameLine'>Anton Jarayseh</h1>
                    <h2>I welcome you to sail through my Portfolio!</h2>
                </div>
                <nav className="selections">
                    <NavLink className="aboutButton">About</NavLink>
                    <NavLink className="projectsButton">Projects</NavLink>
                    <NavLink className="contactButton">Contact</NavLink>
                </nav>
            </div>
        </div>
    )
}
export {HomePage};