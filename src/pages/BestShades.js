import React from 'react';
import './BestShades.css';

const BestShades = () => {
  const shades = [
    { name: 'Boss Berry', color: '#8B008B' },
    { name: 'Peach Whisper', color: '#FFB6C1' },
    { name: 'Velvet Rose', color: '#DC143C' },
    { name: 'Cocoa Crush', color: '#8B4513' },
    { name: 'Blush Bloom', color: '#FF69B4' },
    { name: 'Power Petal', color: '#FF1493' },
  ];

  return (
    <div className="best-shades-page">
      <div className="best-shades-container">
        <div className="best-shades-header">
          <div className="shades-badge">Our Collection</div>
          <h1 className="shades-title">Our Best Shades</h1>
          <p className="shades-subtitle">Handpicked favorites from our community</p>
        </div>

        <div className="shades-grid-page">
          {shades.map((shade, index) => (
            <div key={index} className="shade-card-page">
              <div className="shade-swatch-page" style={{ backgroundColor: shade.color }}>
                <div className="shade-overlay-page"></div>
                <div className="shade-glow-page"></div>
              </div>
              <h3>{shade.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestShades;
