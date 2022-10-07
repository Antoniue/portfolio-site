import './App.css';
import { HomePage } from './components/Home/HomePage';
import {Route, Routes } from "react-router-dom";
import { AboutPage } from './components/About/AboutPage';
import { Projects } from './components/Projects/Projects';
import { ContactPage } from './components/Contact/ContactPage';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const themeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark':'light'));
  }
  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="*" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
      <div className="darkSwitch">
        <label>{theme ==='light' ? 'Light Mode':"Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
      </div>
    </div>
    </themeContext.Provider>
  );
}

export default App;
