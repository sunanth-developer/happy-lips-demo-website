import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import lipstickVideo from '../assets/lipstickvid.mp4';
import './Home.css';

const Home = () => {
  const videoRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented:', err);
      });
    }
  }, []);

  const bestSellers = [
    { name: 'Boss Berry', color: '#8B008B' },
    { name: 'Peach Whisper', color: '#FFB6C1' },
    { name: 'Velvet Rose', color: '#DC143C' },
    { name: 'Cocoa Crush', color: '#8B4513' },
    { name: 'Blush Bloom', color: '#FF69B4' },
    { name: 'Power Petal', color: '#FF1493' },
  ];


  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="video-background-wrapper">
            <video
              ref={videoRef}
              className="hero-background-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={lipstickVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-background-overlay"></div>
          </div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="sparkle sparkle-1">✨</div>
          <div className="sparkle sparkle-2">✨</div>
          <div className="sparkle sparkle-3">✨</div>
          <div className="sparkle sparkle-4">✨</div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>💄 Custom Made Just For You</span>
            </div>
            <h1 className="hero-headline">
              ✨ Your Rules, Your Lips, Your Shade.
            </h1>
            <p className="hero-subheadline">
              Create a lipstick shade that fits your mood, your vibe, and your style.
              <br />
              <span className="highlight-text">Fully customizable</span> — color, shade, fragrance, feel.
            </p>
            <div className="hero-cta">
              <Link to="/build" className="btn btn-primary">
                <span>Create Your Lipstick</span>
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/build" className="btn btn-secondary">
                Explore Shades
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Why Happy Lips */}
      <section className="why-section">
        <div className="why-section-background">
          <div className="why-gradient-orb"></div>
          <div className="why-pattern"></div>
        </div>
        <div className="container">
          <div className="why-header">
            <div className="why-badge">Why Choose Us</div>
            <h2 className="section-title-modern">
              <span className="title-line-1">A lipstick as individual as  <span className="title-line-2">your smile.</span></span>
              
            </h2>
            <p className="why-subtitle">Every detail crafted with you in mind</p>
          </div>
          <div className="features-grid-modern">
            <div className="feature-card-modern">
              <div className="card-gradient-overlay"></div>
              <div className="card-content">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-bg"></div>
                  <div className="feature-icon">🎨</div>
                </div>
                <div className="card-number">01</div>
                <h3>100% Customizable Shades</h3>
                <p>Choose from millions of color combinations</p>
                <div className="card-decoration"></div>
              </div>
            </div>
            <div className="feature-card-modern">
              <div className="card-gradient-overlay"></div>
              <div className="card-content">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-bg"></div>
                  <div className="feature-icon">🌿</div>
                </div>
                <div className="card-number">02</div>
                <h3>Safe, Premium Ingredients</h3>
                <p>All-natural, cruelty-free, and dermatologist tested</p>
                <div className="card-decoration"></div>
              </div>
            </div>
            <div className="feature-card-modern">
              <div className="card-gradient-overlay"></div>
              <div className="card-content">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-bg"></div>
                  <div className="feature-icon">💄</div>
                </div>
                <div className="card-number">03</div>
                <h3>Long-lasting & Hydrating</h3>
                <p>Wears beautifully while nourishing your lips</p>
                <div className="card-decoration"></div>
              </div>
            </div>
            <div className="feature-card-modern">
              <div className="card-gradient-overlay"></div>
              <div className="card-content">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-bg"></div>
                  <div className="feature-icon">🌺</div>
                </div>
                <div className="card-number">04</div>
                <h3>Your Fragrance, Your Oils</h3>
                <p>Personalize the scent and skincare benefits</p>
                <div className="card-decoration"></div>
              </div>
            </div>
            <div className="feature-card-modern">
              <div className="card-gradient-overlay"></div>
              <div className="card-content">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-bg"></div>
                  <div className="feature-icon">✨</div>
                </div>
                <div className="card-number">05</div>
                <h3>Create Your Own Lipstick Name</h3>
                <p>Make it uniquely yours with a custom name</p>
                <div className="card-decoration"></div>
              </div>
            </div>
            <div className="feature-card-modern">
              <div className="card-gradient-overlay"></div>
              <div className="card-content">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-bg"></div>
                  <div className="feature-icon">🎁</div>
                </div>
                <div className="card-number">06</div>
                <h3>Perfect for Gifting</h3>
                <p>Create the perfect personalized gift</p>
                <div className="card-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="how-it-works-background">
          <div className="how-gradient-orb"></div>
          <div className="how-pattern-dots"></div>
        </div>
        <div className="container">
          <div className="how-header">
            <div className="how-badge">Our Process</div>
            <h2 className="how-title">How It Works</h2>
            <p className="how-subtitle">Simple. Fun. Personal.</p>
          </div>
          <div className="how-carousel-wrapper">
            <div className="how-carousel-container">
              <button 
                className="how-carousel-btn how-carousel-prev"
                onClick={() => setCurrentStep((prev) => (prev === 0 ? 6 : prev - 1))}
                aria-label="Previous step"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="how-carousel-viewport">
                <div 
                  className="how-carousel-track"
                  style={{ transform: `translateX(-${currentStep * 100}%)` }}
                >
                  <div className="how-carousel-slide">
                    <div className="how-slide-number">01</div>
                    <div className="how-slide-icon">🎨</div>
                    <div className="how-slide-content">
                      <span className="how-slide-label">Step 1</span>
                      <h3>Pick your base shade</h3>
                      <p>Start with your favorite color family</p>
                    </div>
                  </div>

                  <div className="how-carousel-slide">
                    <div className="how-slide-number">02</div>
                    <div className="how-slide-icon">✨</div>
                    <div className="how-slide-content">
                      <span className="how-slide-label">Step 2</span>
                      <h3>Adjust tone & undertone</h3>
                      <p>Fine-tune to match your skin perfectly</p>
                    </div>
                  </div>

                  <div className="how-carousel-slide">
                    <div className="how-slide-number">03</div>
                    <div className="how-slide-icon">🌺</div>
                    <div className="how-slide-content">
                      <span className="how-slide-label">Step 3</span>
                      <h3>Choose your fragrance</h3>
                      <p>Make it smell as good as it looks</p>
                    </div>
                  </div>

                  <div className="how-carousel-slide">
                    <div className="how-slide-number">04</div>
                    <div className="how-slide-icon">💧</div>
                    <div className="how-slide-content">
                      <span className="how-slide-label">Step 4</span>
                      <h3>Add essential oils</h3>
                      <p>Nourish with premium skincare oils</p>
                    </div>
                  </div>

                  <div className="how-carousel-slide">
                    <div className="how-slide-number">05</div>
                    <div className="how-slide-icon">👁️</div>
                    <div className="how-slide-content">
                      <span className="how-slide-label">Step 5</span>
                      <h3>Preview your lipstick</h3>
                      <p>See your creation come to life</p>
                    </div>
                  </div>

                  <div className="how-carousel-slide">
                    <div className="how-slide-number">06</div>
                    <div className="how-slide-icon">📦</div>
                    <div className="how-slide-content">
                      <span className="how-slide-label">Step 6</span>
                      <h3>Customize packaging</h3>
                      <p>Choose your perfect case</p>
                    </div>
                  </div>

                  <div className="how-carousel-slide how-slide-final">
                    <div className="how-slide-number how-slide-number-final">07</div>
                    <div className="how-slide-icon">🚀</div>
                    <div className="how-slide-content">
                      <span className="how-slide-label">Final Step</span>
                      <h3>Get it delivered</h3>
                      <p>Your custom lipstick arrives at your door</p>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                className="how-carousel-btn how-carousel-next"
                onClick={() => setCurrentStep((prev) => (prev === 6 ? 0 : prev + 1))}
                aria-label="Next step"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Best Shades */}
      <section className="best-sellers">
        <div className="best-sellers-background">
          <div className="shades-gradient-orb"></div>
        </div>
        <div className="container">
          <div className="shades-header">
            <div className="shades-badge">Our Collection</div>
            <h2 className="section-title-modern-shades">Our Best Shades</h2>
            <p className="shades-subtitle">Handpicked favorites from our community</p>
          </div>
          <div className="shades-grid">
            {bestSellers.map((shade, index) => (
              <div key={index} className="shade-card-modern">
                <div className="shade-swatch-modern" style={{ backgroundColor: shade.color }}>
                  <div className="shade-overlay"></div>
                  <div className="shade-glow"></div>
                </div>
                <h3>{shade.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
