import React from 'react';
import './ShippingReturns.css';

const ShippingReturns = () => {
  return (
    <div className="shipping-returns-page">
      <div className="shipping-returns-container">
        <div className="shipping-returns-header">
          <h1>Shipping & Returns</h1>
          <p className="shipping-returns-subtitle">Everything you need to know about delivery and returns</p>
        </div>

        <div className="shipping-returns-content">
          <div className="section">
            <h2>Shipping Information</h2>
            
            <div className="subsection">
              <h3>Processing Time</h3>
              <p>
                Custom lipsticks are made to order, so please allow 5-7 business days for processing before your order ships. 
                You'll receive a confirmation email once your order is placed and a tracking number once it ships.
              </p>
            </div>

            <div className="subsection">
              <h3>Shipping Options</h3>
              <ul>
                <li><strong>Standard Shipping:</strong> 5-7 business days</li>
                <li><strong>Express Shipping:</strong> 2-3 business days</li>
                <li><strong>Overnight Shipping:</strong> Next business day</li>
              </ul>
              <p>Free standard shipping available on select orders!</p>
            </div>

            <div className="subsection">
              <h3>Shipping Coverage</h3>
              <p>
                We currently ship across India. We're working on expanding our shipping options 
                to reach more locations. Sign up for our newsletter to be notified when we expand to your area.
              </p>
            </div>

            <div className="subsection">
              <h3>Tracking Your Order</h3>
              <p>
                Once your order ships, you'll receive an email with a tracking number. You can use this to track your 
                package's journey right to your door.
              </p>
            </div>
          </div>

          <div className="section">
            <h2>Returns & Exchanges</h2>
            
            <div className="subsection">
              <h3>Return Policy</h3>
              <p>
                Due to the personalized nature of our custom lipsticks, we cannot accept returns or exchanges on customized 
                products. Each lipstick is made specifically for you based on your selections.
              </p>
            </div>

            <div className="subsection">
              <h3>Damaged or Incorrect Items</h3>
              <p>
                If you receive a damaged product or an item that doesn't match your order, please contact us within 7 days 
                of delivery. We'll work with you to resolve the issue, including sending a replacement at no cost to you.
              </p>
            </div>

            <div className="subsection">
              <h3>Refunds</h3>
              <p>
                Refunds are only available for damaged or incorrect items. Once we receive and inspect the returned item, 
                we'll process your refund within 5-7 business days to your original payment method.
              </p>
            </div>

            <div className="subsection">
              <h3>Contact Us</h3>
              <p>
                If you have any questions about shipping or returns, please don't hesitate to contact us at 
                <a href="mailto:hello@happylips.com"> hello@happylips.com</a> or through our 
                <a href="/contact"> Contact Us</a> page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturns;
