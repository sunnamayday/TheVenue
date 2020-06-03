import React from 'react';
import './App.css'
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueNFO from './components/venueNFO/VenueNFO';
import Highlight from './components/highlight/Highlight';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';
import Pricing from './components/pricing/Pricing';
import './resources/styles.css';
import { Element } from 'react-scroll';


function App() {
  return (
    <div className="App">
      <Header />
      <Element name='featured'>
        <Featured />
      </Element>
      <Element name='venueNFO'>
        <VenueNFO />
      </Element>
      <Element name='highlights'>
        <Highlight />
      </Element>
      <Element name='pricing'>
        <Pricing />
      </Element>
      <Element name='location'>
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
