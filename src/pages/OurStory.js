import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <div className="our-story-page">
      <div className="story-hero">
        <div className="story-hero-content">
          <div className="story-badge">Our Journey</div>
          <h1 className="story-hero-title">
            <span className="title-line-1">Where Beauty</span>
            <span className="title-line-2">Meets Individuality</span>
          </h1>
          <p className="story-hero-subtitle">
            Every shade tells a story. Every lipstick is a canvas for your unique expression.
          </p>
        </div>
        <div className="story-hero-visual">
          <div className="story-orb-1"></div>
          <div className="story-orb-2"></div>
          <div className="story-pattern"></div>
        </div>
      </div>

      <div className="story-container">
        <div className="story-timeline">
          <div className="timeline-line"></div>
          
          <div className="story-card story-card-left">
            <div className="story-card-number">01</div>
            <div className="story-card-content">
              <div className="story-icon-wrapper">
                <div className="story-icon-bg"></div>
                <span className="story-icon">💡</span>
              </div>
              <h2>The Beginning</h2>
              <p>
                Happy Lips was born from a simple belief: every person deserves a lipstick that's as unique as they are. 
                We started with a vision to break free from the one-size-fits-all approach to beauty, creating a space where 
                individuality isn't just celebrated—it's the foundation of everything we do.
              </p>
            </div>
          </div>

          <div className="story-card story-card-right">
            <div className="story-card-number">02</div>
            <div className="story-card-content">
              <div className="story-icon-wrapper">
                <div className="story-icon-bg"></div>
                <span className="story-icon">🎯</span>
              </div>
              <h2>Our Mission</h2>
              <p>
                We're on a mission to empower you to express yourself authentically through color. Every shade, every formula, 
                every detail is crafted with care, ensuring that your lipstick isn't just makeup—it's a reflection of who you are.
              </p>
            </div>
          </div>

          <div className="story-card story-card-left">
            <div className="story-card-number">03</div>
            <div className="story-card-content">
              <div className="story-icon-wrapper">
                <div className="story-icon-bg"></div>
                <span className="story-icon">✨</span>
              </div>
              <h2>What Makes Us Different</h2>
              <p>
                Unlike traditional beauty brands, we put you in control. Choose your color, adjust your tone, select your fragrance, 
                and add nourishing oils—every decision is yours. We believe that beauty should be personal, not prescriptive.
              </p>
            </div>
          </div>

          <div className="story-card story-card-right story-card-final">
            <div className="story-card-number">04</div>
            <div className="story-card-content">
              <div className="story-icon-wrapper">
                <div className="story-icon-bg"></div>
                <span className="story-icon">💝</span>
              </div>
              <h2>Join Our Community</h2>
              <p>
                We're more than a brand—we're a community of individuals who believe in celebrating uniqueness. Join thousands of 
                happy customers who have found their perfect shade and discovered the joy of truly personalized beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
