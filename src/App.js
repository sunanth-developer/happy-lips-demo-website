import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Build from './pages/Build';
import BestShades from './pages/BestShades';
import OurStory from './pages/OurStory';
import Integrity from './pages/Integrity';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ShippingReturns from './pages/ShippingReturns';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<Build />} />
          <Route path="/best-shades" element={<BestShades />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/integrity" element={<Integrity />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
