import React, { useState } from 'react';
import './Build.css';

const Build = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    shadeFamily: '',
    tone: '',
    fragrance: '',
    oils: [],
    name: '',
  });

  const shadeFamilies = ['Reds', 'Pinks', 'Nudes', 'Plums', 'Corals', 'Browns'];
  const tones = ['Warm', 'Cool', 'Bright', 'Bold'];
  const fragrances = ['Vanilla', 'Strawberry', 'Rose', 'Chocolate', 'Mint', 'Lavender', 'No fragrance'];
  const oils = ['Vitamin E', 'Rosehip Oil', 'Jojoba Oil', 'Almond Oil', 'Coconut Oil'];

  const steps = [
    { number: 1, title: 'Choose Your Shade Family' },
    { number: 2, title: 'Adjust Your Tone' },
    { number: 3, title: 'Pick a Fragrance' },
    { number: 4, title: 'Add Essential Oils' },
    { number: 5, title: 'Name Your Lipstick' },
    { number: 6, title: 'Final Preview' },
  ];

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleOil = (oil) => {
    setFormData(prev => ({
      ...prev,
      oils: prev.oils.includes(oil)
        ? prev.oils.filter(o => o !== oil)
        : [...prev.oils, oil]
    }));
  };

  const getPreviewColor = () => {
    if (!formData.shadeFamily) {
      return '#FF69B4'; // Default pink
    }

    // Base colors for each shade family
    const baseColors = {
      'Reds': {
        'Warm': '#DC143C',
        'Cool': '#8B0000',
        'Bright': '#FF0000',
        'Bold': '#C71585',
      },
      'Pinks': {
        'Warm': '#FFB6C1',
        'Cool': '#FF69B4',
        'Bright': '#FF1493',
        'Bold': '#FF1493',
      },
      'Nudes': {
        'Warm': '#F5DEB3',
        'Cool': '#DEB887',
        'Bright': '#F0E68C',
        'Bold': '#D2B48C',
      },
      'Plums': {
        'Warm': '#8B008B',
        'Cool': '#9370DB',
        'Bright': '#BA55D3',
        'Bold': '#DA70D6',
      },
      'Corals': {
        'Warm': '#FF7F50',
        'Cool': '#FF6347',
        'Bright': '#FFA07A',
        'Bold': '#FF8C69',
      },
      'Browns': {
        'Warm': '#8B4513',
        'Cool': '#A0522D',
        'Bright': '#CD853F',
        'Bold': '#D2691E',
      },
    };

    const shadeFamily = formData.shadeFamily;
    const tone = formData.tone || 'Warm'; // Default to Warm if no tone selected
    
    if (baseColors[shadeFamily] && baseColors[shadeFamily][tone]) {
      return baseColors[shadeFamily][tone];
    }
    
    // Fallback to first available tone or default
    if (baseColors[shadeFamily]) {
      return baseColors[shadeFamily]['Warm'] || Object.values(baseColors[shadeFamily])[0];
    }
    
    return '#FF69B4'; // Final fallback
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <p className="step-description">Pick the base color that speaks your mood today.</p>
            <div className="options-grid">
              {shadeFamilies.map(family => (
                <button
                  key={family}
                  className={`option-btn ${formData.shadeFamily === family ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, shadeFamily: family })}
                >
                  {family}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <p className="step-description">Warm, cool, bright, or bold — tune your perfect shade.</p>
            <div className="options-grid">
              {tones.map(tone => (
                <button
                  key={tone}
                  className={`option-btn ${formData.tone === tone ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, tone })}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <p className="step-description">Make your lipstick smell as good as it looks.</p>
            <div className="options-grid">
              {fragrances.map(frag => (
                <button
                  key={frag}
                  className={`option-btn ${formData.fragrance === frag ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, fragrance: frag })}
                >
                  {frag}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-content">
            <p className="step-description">Nourish and care for your lips with premium oils.</p>
            <div className="options-grid">
              {oils.map(oil => (
                <button
                  key={oil}
                  className={`option-btn ${formData.oils.includes(oil) ? 'active' : ''}`}
                  onClick={() => toggleOil(oil)}
                >
                  {oil}
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="step-content">
            <p className="step-description">This is your creation — give it a name that matches your vibe.</p>
            <input
              type="text"
              placeholder="Enter your lipstick name..."
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="name-input"
            />
          </div>
        );
      case 6:
        return (
          <div className="step-content">
            <p className="step-description">Your perfect lipstick is ready. Review and order.</p>
            <div className="preview-summary">
              <div className="summary-item">
                <strong>Shade Family:</strong> {formData.shadeFamily || 'Not selected'}
              </div>
              <div className="summary-item">
                <strong>Tone:</strong> {formData.tone || 'Not selected'}
              </div>
              <div className="summary-item">
                <strong>Fragrance:</strong> {formData.fragrance || 'Not selected'}
              </div>
              <div className="summary-item">
                <strong>Essential Oils:</strong> {formData.oils.length > 0 ? formData.oils.join(', ') : 'None selected'}
              </div>
              <div className="summary-item">
                <strong>Name:</strong> {formData.name || 'Unnamed'}
              </div>
            </div>
            <button className="order-btn">Order Now</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="build-page">
      <div className="build-container">
        <h1 className="build-title">Build Your Lipstick</h1>
        
        <div className="step-indicator">
          {steps.map(step => (
            <div
              key={step.number}
              className={`step-indicator-item ${currentStep >= step.number ? 'active' : ''} ${currentStep === step.number ? 'current' : ''}`}
            >
              <div className="step-indicator-number">{step.number}</div>
              <div className="step-indicator-title">{step.title}</div>
            </div>
          ))}
        </div>

        <div className="build-content">
          <div className="step-panel">
            <h2 className="current-step-title">{steps[currentStep - 1].title}</h2>
            {renderStepContent()}
            <div className="step-navigation">
              {currentStep > 1 && (
                <button className="nav-btn back-btn" onClick={handleBack}>
                  ← Back
                </button>
              )}
              {currentStep < 6 && (
                <button className="nav-btn next-btn" onClick={handleNext} disabled={
                  (currentStep === 1 && !formData.shadeFamily) ||
                  (currentStep === 2 && !formData.tone) ||
                  (currentStep === 3 && !formData.fragrance)
                }>
                  Next →
                </button>
              )}
            </div>
          </div>

          <div className="preview-sidebar">
            <h3>Your Lipstick Preview</h3>
            <div className="preview-lipstick-wrapper">
              <div className="preview-lipstick-container">
                <div className="lipstick-3d-realistic">
                  {/* Cap - Positioned to the left */}
                  <div className="lipstick-cap cap-matte-pink">
                    <div className="cap-top"></div>
                    <div className="cap-shine"></div>
                    <div className="cap-band"></div>
                    {formData.name && (
                      <div className="cap-label">{formData.name}</div>
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
                  <div className="lipstick-tube-realistic tube-matte-pink">
                    <div className="tube-shine-left"></div>
                    <div className="tube-shine-right"></div>
                    <div className="tube-bottom"></div>
                    <div className="tube-pattern"></div>
                    <div className="tube-brand-line"></div>
                  </div>
                  
                  {/* Shadow */}
                  <div className="lipstick-shadow-realistic"></div>
                </div>
                
                {formData.name && (
                  <p className="preview-name">{formData.name}</p>
                )}
                {!formData.name && (
                  <p className="preview-name-placeholder">Your lipstick name will appear here</p>
                )}
              </div>
            </div>
            <div className="preview-details">
              <div className="preview-detail-item">
                <span className="detail-label">Shade:</span>
                <span className="detail-value">{formData.shadeFamily || '—'}</span>
              </div>
              <div className="preview-detail-item">
                <span className="detail-label">Tone:</span>
                <span className="detail-value">{formData.tone || '—'}</span>
              </div>
              <div className="preview-detail-item">
                <span className="detail-label">Fragrance:</span>
                <span className="detail-value">{formData.fragrance || '—'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
