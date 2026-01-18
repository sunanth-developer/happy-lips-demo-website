import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-wrapper">
            <img src={logo} alt="Happy Lips" className="logo-img" />
            <div className="logo-glow"></div>
          </div>
          <div className="logo-text-container">
            <span className="logo-text">HAPPY LIPS</span>
            <span className="logo-tagline-small">Your Rules. Your Lips. Your Shade.</span>
          </div>
        </Link>
        
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/best-shades" 
              className={`navbar-link ${isActive('/best-shades') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Best Shades</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/build" 
              className={`navbar-link ${isActive('/build') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Build Your Shade</span>
            </Link>
          </li>
          <li className="navbar-dropdown">
            <span className={`navbar-link ${isActive('/our-story') || isActive('/integrity') || isActive('/sustainability') ? 'active' : ''}`}>
              <span>About</span>
              <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link 
                  to="/our-story" 
                  className={`dropdown-link ${isActive('/our-story') ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link 
                  to="/integrity" 
                  className={`dropdown-link ${isActive('/integrity') ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Integrity
                </Link>
              </li>
              <li>
                <Link 
                  to="/sustainability" 
                  className={`dropdown-link ${isActive('/sustainability') ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact</span>
            </Link>
          </li>
          <li className="navbar-dropdown">
            <span className={`navbar-link ${isActive('/faq') || isActive('/shipping-returns') ? 'active' : ''}`}>
              <span>Help</span>
              <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link 
                  to="/faq" 
                  className={`dropdown-link ${isActive('/faq') ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/shipping-returns" 
                  className={`dropdown-link ${isActive('/shipping-returns') ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
      <div className="navbar-accent"></div>
    </nav>
  );
};

export default Navbar;
