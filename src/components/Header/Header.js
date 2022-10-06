import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css';
function Header({navlist}){
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <header className="header">
            <h1 className="headerLogo">Antoniue</h1>
            <nav className="headerNavigation">
                <NavLink to='/'>Home</NavLink>
                <NavLink to={'/'+navlist[1].toLowerCase()}>{navlist[1]}</NavLink>
                <NavLink to={'/'+navlist[2].toLowerCase()}>{navlist[2]}</NavLink>
            </nav>
            <button className="burger-menu" onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </button>
            <div className={menu_class}></div>
        </header>
    )
}
export {Header};