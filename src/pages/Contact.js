import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">We'd love to hear from you</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h2>Get in Touch</h2>
              <p>
                Have a question, suggestion, or just want to say hello? We're here to help! 
                Reach out to us through any of the channels below.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h3>Email</h3>
                    <p>hello@happylips.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h3>Mobile</h3>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">💬</span>
                  <div>
                    <h3>WhatsApp</h3>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-link">
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📸</span>
                  <div>
                    <h3>Instagram</h3>
                    <a href="https://instagram.com/happylips" target="_blank" rel="noopener noreferrer" className="social-link">
                      Follow us @happylips
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
