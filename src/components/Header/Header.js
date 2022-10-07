import { NavLink } from 'react-router-dom';
import '../Header/Header.css';
import Home from '../Header/home.svg';
import About from '../Header/about.png';
import Projects from '../Header/projects.png';
import Contact from '../Header/contact.svg';

function Header({navlist}){

    function handle(){
        let arr = [{'name': 'Home', 'src': Home}];
        if(navlist[1] === 'About')
            arr.push({'name': 'About', 'src': About});
        else if(navlist[1] === 'Projects')
            arr.push({'name': 'Projects', 'src': Projects})
        else
            arr.push({'name': 'Contact', 'src': Contact});
        
        if(navlist[2] === 'About')
            arr.push({'name': 'About', 'src': About});
        else if(navlist[2] === 'Projects')
            arr.push({'name': 'Projects', 'src': Projects})
        else
            arr.push({'name': 'Contact', 'src': Contact});
            
        return arr;
    }

    const logos = handle();

    return (
        <header className="header">
            <h1 className="headerLogo">Antoniue</h1>
            <nav className="headerNavigation">
                <NavLink to='/'>Home</NavLink>
                <NavLink to={'/'+navlist[1].toLowerCase()}>{navlist[1]}</NavLink>
                <NavLink to={'/'+navlist[2].toLowerCase()}>{navlist[2]}</NavLink>
            </nav>
            <nav className="responsiveNavigation">
                <NavLink to='/'>
                    <img src={logos[0].src} alt={logos[0].name} />
                </NavLink>
                <NavLink to={'/'+navlist[1].toLowerCase()}>
                    <img src={logos[1].src} alt={logos[1].name} />
                </NavLink>
                <NavLink to={'/'+navlist[2].toLowerCase()}>
                    <img src={logos[2].src} alt={logos[2].name} />
                </NavLink>
            </nav>
        </header>
    )
}
export {Header};