import './App.css';
import { HomePage } from './components/Home/HomePage';
import {Route, Routes } from "react-router-dom";
import { AboutPage } from './components/About/AboutPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/About" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
