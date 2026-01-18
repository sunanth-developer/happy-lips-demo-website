import React, { useState } from 'react';
import './Product.css';

const Product = () => {
  const [selectedColor, setSelectedColor] = useState('reds');
  const [intensity, setIntensity] = useState(50);
  const [fragrance, setFragrance] = useState('');
  const [selectedOils, setSelectedOils] = useState([]);
  const [packagingName, setPackagingName] = useState('');
  const [packagingStyle, setPackagingStyle] = useState('matte-pink');

  const colorFamilies = {
    reds: ['#DC143C', '#8B0000', '#FF6347', '#FF0000', '#C71585'],
    pinks: ['#FFB6C1', '#FF69B4', '#FF1493', '#FFC0CB', '#FFB6C1'],
    nudes: ['#F5DEB3', '#DEB887', '#D2B48C', '#F0E68C', '#E6E6FA'],
    browns: ['#8B4513', '#A0522D', '#CD853F', '#D2691E', '#BC8F8F'],
    plums: ['#8B008B', '#9370DB', '#BA55D3', '#DA70D6', '#DDA0DD'],
    corals: ['#FF7F50', '#FF6347', '#FFA07A', '#FF8C69', '#FF7F00'],
  };

  const fragrances = [
    'Vanilla', 'Strawberry', 'Rose', 'Chocolate', 'Mint', 'Lavender', 'No fragrance'
  ];

  const oils = [
    { name: 'Vitamin E', id: 'vitamin-e' },
    { name: 'Rosehip Oil', id: 'rosehip' },
    { name: 'Jojoba Oil', id: 'jojoba' },
    { name: 'Almond Oil', id: 'almond' },
    { name: 'Coconut Oil', id: 'coconut' },
  ];

  const packagingStyles = [
    { id: 'matte-pink', name: 'Matte Pink' },
    { id: 'glossy-rose-gold', name: 'Glossy Rose Gold' },
    { id: 'velvet-black', name: 'Velvet Black' },
    { id: 'cream-beige', name: 'Cream Beige' },
  ];

  const toggleOil = (oilId) => {
    setSelectedOils(prev =>
      prev.includes(oilId) ? prev.filter(id => id !== oilId) : [...prev, oilId]
    );
  };

  const getPreviewColor = () => {
    const colors = colorFamilies[selectedColor];
    return colors[Math.floor(intensity / 20)] || colors[0];
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-header">
          <h1>Design Your Own Lipstick</h1>
          <p className="product-description">
            Build a lipstick that matches your unique style — choose the color, shade intensity, 
            fragrance, and essential oils.
          </p>
        </div>

        <div className="product-content">
          <div className="product-preview">
            <div className="preview-lipstick-container">
              <div className="lipstick-3d-realistic">
                {/* Cap - Positioned to the left */}
                <div className={`lipstick-cap cap-${packagingStyle}`}>
                  <div className="cap-top"></div>
                  <div className="cap-shine"></div>
                  <div className="cap-band"></div>
                  {packagingName && (
                    <div className="cap-label">{packagingName}</div>
                  )}
                </div>
                
                {/* Lipstick Bullet - Longer */}
                <div 
                  className="lipstick-bullet-realistic"
                  style={{ backgroundColor: getPreviewColor() }}
                >
                  <div className="bullet-top-shine"></div>
                  <div className="bullet-side-shine"></div>
                  <div className="bullet-highlight"></div>
                  <div className="bullet-texture"></div>
                </div>
                
                {/* Tube - Smaller */}
                <div className={`lipstick-tube-realistic tube-${packagingStyle}`}>
                  <div className="tube-shine-left"></div>
                  <div className="tube-shine-right"></div>
                  <div className="tube-bottom"></div>
                  <div className="tube-pattern"></div>
                  <div className="tube-brand-line"></div>
                </div>
                
                {/* Shadow */}
                <div className="lipstick-shadow-realistic"></div>
              </div>
              
              {packagingName && (
                <p className="preview-name">{packagingName}</p>
              )}
            </div>
          </div>

          <div className="customization-panel">
            {/* Color Selection */}
            <div className="customization-section">
              <h2>1️⃣ Choose Your Color</h2>
              <div className="color-families">
                {Object.keys(colorFamilies).map(family => (
                  <button
                    key={family}
                    className={`color-family-btn ${selectedColor === family ? 'active' : ''}`}
                    onClick={() => setSelectedColor(family)}
                  >
                    {family.charAt(0).toUpperCase() + family.slice(1)}
                  </button>
                ))}
              </div>
              <div className="color-swatches">
                {colorFamilies[selectedColor].map((color, index) => (
                  <div
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                    onClick={() => setIntensity((index + 1) * 20)}
                  ></div>
                ))}
              </div>
            </div>

            {/* Shade Intensity */}
            <div className="customization-section">
              <h2>2️⃣ Shade Intensity</h2>
              <div className="intensity-slider-container">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="intensity-slider"
                />
                <div className="intensity-labels">
                  <span>Soft</span>
                  <span>Medium</span>
                  <span>Deep</span>
                  <span>Ultra Pigmented</span>
                </div>
              </div>
            </div>

            {/* Fragrance */}
            <div className="customization-section">
              <h2>3️⃣ Fragrance Options</h2>
              <div className="fragrance-grid">
                {fragrances.map(frag => (
                  <button
                    key={frag}
                    className={`fragrance-btn ${fragrance === frag ? 'active' : ''}`}
                    onClick={() => setFragrance(frag)}
                  >
                    {frag}
                  </button>
                ))}
              </div>
            </div>

            {/* Essential Oils */}
            <div className="customization-section">
              <h2>4️⃣ Essential Oils</h2>
              <div className="oils-grid">
                {oils.map(oil => (
                  <button
                    key={oil.id}
                    className={`oil-btn ${selectedOils.includes(oil.id) ? 'active' : ''}`}
                    onClick={() => toggleOil(oil.id)}
                  >
                    {oil.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Packaging Name */}
            <div className="customization-section">
              <h2>5️⃣ Packaging Name</h2>
              <input
                type="text"
                placeholder="Name your lipstick…"
                value={packagingName}
                onChange={(e) => setPackagingName(e.target.value)}
                className="name-input"
              />
            </div>

            {/* Packaging Style */}
            <div className="customization-section">
              <h2>6️⃣ Packaging Style</h2>
              <div className="packaging-grid">
                {packagingStyles.map(style => (
                  <button
                    key={style.id}
                    className={`packaging-btn ${packagingStyle === style.id ? 'active' : ''}`}
                    onClick={() => setPackagingStyle(style.id)}
                  >
                    {style.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="add-to-cart-btn">
              Create My Lipstick →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
