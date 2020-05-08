import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutPage from './components/AboutPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
          <AboutPage/>
        </p>
        
      </header>
    </div>
  );
}

export default App;
