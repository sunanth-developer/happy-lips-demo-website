import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I customize my lipstick?',
      answer: 'You can customize your lipstick by choosing your shade family, adjusting the tone, selecting a fragrance, adding essential oils, and naming your creation. Simply follow the step-by-step process on our Build Your Shade page.'
    },
    {
      question: 'How long does it take to receive my custom lipstick?',
      answer: 'Once you place your order, it typically takes 5-7 business days to create your custom lipstick, plus shipping time. You\'ll receive a tracking number once your order ships.'
    },
    {
      question: 'What ingredients do you use?',
      answer: 'We use only high-quality, safe ingredients. All ingredients are clearly listed on our product pages, and we\'re committed to transparency about what goes into your lipstick.'
    },
    {
      question: 'Can I return or exchange my custom lipstick?',
      answer: 'Due to the personalized nature of our products, custom lipsticks cannot be returned or exchanged. However, if you receive a damaged or incorrect product, please contact us immediately and we\'ll make it right.'
    },
    {
      question: 'Are your products cruelty-free?',
      answer: 'Yes! We are 100% cruelty-free and never test on animals. We\'re committed to ethical practices throughout our entire supply chain.'
    },
    {
      question: 'Do you ship across India?',
      answer: 'Yes! We currently ship across India. We\'re working on expanding our shipping options to reach more locations. Sign up for our newsletter to be notified when we expand to your area.'
    },
    {
      question: 'How do I care for my lipstick?',
      answer: 'Store your lipstick in a cool, dry place away from direct sunlight. Keep the cap securely closed when not in use. With proper care, your lipstick should last for up to 2 years.'
    },
    {
      question: 'Can I create multiple shades in one order?',
      answer: 'Yes! You can create as many custom shades as you like. Simply add each customized lipstick to your cart and checkout together or separately—whatever works best for you.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p className="faq-subtitle">Everything you need to know</p>
        </div>

        <div className="faq-content">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
