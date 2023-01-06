import React from 'react';
import './App.css';
import Header from './components/Header'
import AppBar from './components/AppBar'
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
        </main>
     
  


  );
}

export default App;
