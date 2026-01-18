import React from 'react';
import './Integrity.css';

const Integrity = () => {
  const integrityValues = [
    {
      icon: '🔍',
      title: 'Ingredient Transparency',
      description: 'We believe in complete transparency about what goes into your lipstick. Every ingredient is carefully selected and clearly listed, so you know exactly what you\'re putting on your lips. We use only high-quality, safe ingredients that meet the highest standards.',
      color: '#6B2C91'
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Every lipstick undergoes rigorous quality testing before it reaches you. We maintain strict quality control standards to ensure consistency, safety, and performance. Your satisfaction and safety are our top priorities.',
      color: '#E91E63'
    },
    {
      icon: '🤝',
      title: 'Ethical Practices',
      description: 'We\'re committed to ethical sourcing and manufacturing practices. We work with suppliers who share our values of fairness, sustainability, and respect for people and the planet. Every step of our process reflects our commitment to doing the right thing.',
      color: '#8B008B'
    },
    {
      icon: '💖',
      title: 'Customer First',
      description: 'Your trust is everything to us. We stand behind every product we create and are committed to addressing any concerns promptly and fairly. Your happiness and confidence in our products drive everything we do.',
      color: '#FF1493'
    }
  ];

  return (
    <div className="integrity-page">
      <div className="integrity-hero">
        <div className="integrity-hero-content">
          <div className="integrity-badge">Our Promise</div>
          <h1 className="integrity-hero-title">
            <span className="title-line-1">Our Integrity</span>
          </h1>
          <p className="integrity-hero-subtitle">
            Transparency, honesty, and commitment to excellence in everything we do
          </p>
        </div>
        <div className="integrity-hero-visual">
          <div className="integrity-orb-1"></div>
          <div className="integrity-orb-2"></div>
        </div>
      </div>

      <div className="integrity-container">
        <div className="integrity-grid">
          {integrityValues.map((value, index) => (
            <div key={index} className="integrity-card-modern">
              <div className="integrity-card-header">
                <div className="integrity-icon-container" style={{ '--icon-color': value.color }}>
                  <div className="integrity-icon-bg"></div>
                  <span className="integrity-icon">{value.icon}</span>
                </div>
                <div className="integrity-card-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
              <div className="integrity-card-body">
                <h2>{value.title}</h2>
                <p>{value.description}</p>
              </div>
              <div className="integrity-card-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrity;

