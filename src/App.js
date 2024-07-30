import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/services/services';
import Interioris from './components/interioris/interioris';




function App() {
  return (
    <div className="App">
          < Header />
          < Hero />
          < Services />
          < Interioris />
    </div>
  );
}

export default App;
