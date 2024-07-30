import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/services/services';
import Interioris from './components/interioris/interioris';
import Market from './components/market/market';
import Blog from './components/blog/blog';
import News from './components/news/news';
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="App">
          < Header />
          < Hero />
          < Services />
          < Interioris />
          < Market />
          < Blog />
          < News />
          < Footer />
    </div>
  );
}

export default App;
