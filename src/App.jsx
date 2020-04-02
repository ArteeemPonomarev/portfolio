import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Skills from './Skills';
import Slogan from './Slogan';
import Projects from './Projects'


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Slogan />
    </div>
  );
}

export default App;
