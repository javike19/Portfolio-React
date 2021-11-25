import './App.scss';
import CV from './components/CV';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from "./components/Footer";
import DarkMode from './components/DarkMode';
import React from 'react';
import Language from './components/Language';
import ProjectsInfo from "./components/ProjectsInfo";

const technologies = ProjectsInfo;



function App() {

  

  return (
    <div id="home">
      <div  className="utils-header">
        <a className="btn-home" href="#home"><img src="https://cdn-icons-png.flaticon.com/512/992/992703.png" alt="home"/></a>
        <DarkMode></DarkMode>
        <Language></Language>
      </div>
      <Intro ></Intro>
      <Projects></Projects>
      <Skills technologies={technologies}></Skills>
      <CV></CV>
      <Footer></Footer>
    </div>
  );
}

export default App;
