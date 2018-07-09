import React from 'react';
import './assets/css/normalize.css';
import './assets/css/carousel.css'
import './assets/css/styles.css';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import MovieCarousel from './assets/components/Carousel'
import Sections from './assets/components/sections/Sections'
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
          <div className="main">
              <div className="container">
                  <Header />
                  <MovieCarousel/>
                  <Sections />
                  <Footer />
              </div>
          </div>
      </Router>
    );
  }
}

export default App;
