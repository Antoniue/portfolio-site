import stars from '../Home/stars.png';

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
                <div className="selections">
                    <button className="aboutButton">About</button>
                    <button className="projectsButton">Projects</button>
                    <button className="contactButton">Contact</button>
                </div>
            </div>
        </div>
    )
}
export {HomePage};