import { NavLink } from 'react-router-dom';
import '../Header/Header.css';
function Header({navlist}){
    return (
        <header className="header">
            <h1 className="headerLogo">Antoniue</h1>
            <nav className="headerNavigation">
                <NavLink to='/'>Home</NavLink>
                <NavLink to={'/'+navlist[1].toLowerCase()}>{navlist[1]}</NavLink>
                <NavLink to={'/'+navlist[2].toLowerCase()}>{navlist[2]}</NavLink>
            </nav>
        </header>
    )
}
export {Header};