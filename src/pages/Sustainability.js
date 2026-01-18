import React from 'react';
import './Sustainability.css';

const Sustainability = () => {
  const sustainabilityInitiatives = [
    {
      icon: '🌱',
      title: 'Eco-Friendly Packaging',
      description: 'We\'re committed to reducing our environmental footprint through sustainable packaging solutions. Our lipstick cases are designed to be reusable and recyclable, and we\'re constantly exploring new ways to minimize waste while maintaining the quality and beauty you expect.',
      stat: '100%',
      statLabel: 'Recyclable'
    },
    {
      icon: '🌍',
      title: 'Responsible Sourcing',
      description: 'We carefully select suppliers who share our commitment to environmental responsibility. Our ingredients are sourced ethically and sustainably, ensuring that our products are not only good for you but also good for the planet.',
      stat: '100%',
      statLabel: 'Ethical'
    },
    {
      icon: '🚚',
      title: 'Carbon Neutral Shipping',
      description: 'We\'re working towards carbon-neutral shipping options and partner with carriers who prioritize environmental sustainability. Every package is shipped with care for both your product and our planet.',
      stat: '0%',
      statLabel: 'Carbon Footprint'
    },
    {
      icon: '💚',
      title: 'Our Commitment',
      description: 'Sustainability isn\'t just a goal—it\'s a core value that guides everything we do. We\'re continuously improving our practices and finding new ways to reduce our impact while delivering the personalized beauty experience you deserve.',
      stat: '∞',
      statLabel: 'Ongoing'
    }
  ];

  return (
    <div className="sustainability-page">
      <div className="sustainability-hero">
        <div className="sustainability-hero-content">
          <div className="sustainability-badge">Our Promise</div>
          <h1 className="sustainability-hero-title">
            <span className="title-line-1">Sustainability</span>
          </h1>
          <p className="sustainability-hero-subtitle">
            Caring for you and the planet—one lipstick at a time
          </p>
        </div>
        <div className="sustainability-hero-visual">
          <div className="sustainability-orb-1"></div>
          <div className="sustainability-orb-2"></div>
          <div className="sustainability-pattern"></div>
        </div>
      </div>

      <div className="sustainability-container">
        <div className="sustainability-grid-modern">
          {sustainabilityInitiatives.map((initiative, index) => (
            <div key={index} className="sustainability-card-innovative">
              <div className="sustainability-card-top">
                <div className="sustainability-icon-wrapper">
                  <div className="sustainability-icon-bg"></div>
                  <span className="sustainability-icon">{initiative.icon}</span>
                </div>
                <div className="sustainability-stat">
                  <div className="stat-number">{initiative.stat}</div>
                  <div className="stat-label">{initiative.statLabel}</div>
                </div>
              </div>
              <div className="sustainability-card-content">
                <h2>{initiative.title}</h2>
                <p>{initiative.description}</p>
              </div>
              <div className="sustainability-card-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sustainability;

