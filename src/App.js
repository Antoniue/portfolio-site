import './App.css';
import { HomePage } from './components/Home/HomePage';
import {Route, Routes } from "react-router-dom";
import { AboutPage } from './components/About/AboutPage';
import { Projects } from './components/Projects/Projects';
import { ContactPage } from './components/Contact/ContactPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="*" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
