import React from 'react';
import './App.css';
import Header from '../src/components/Header'
import AppBar from '../src/components/AppBar'
import AboutMe from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (

   <main className="text-gray-400 bg-gray-900 body-font">
        <AppBar/>
        <Header/> 
         <AboutMe/>
        <Projects/>
        <Contact/>
        {/* <Skills/>
        <Footer/>  */} 

        
        <a
          className="App-link"
          href="https://github.com/mariaka86?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
        </main>
     
  


  );
}

export default App;
