import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './Services.css'
import Image1 from '../../assets/insatllingcelling.jpg'
import Image2 from '../../assets/installingadoor.jpg'
import Image3 from '../../assets/KitchenUnits&WardrobeFitting.jpg'
import Image4 from '../../assets/PaintingServices.jpg'

const servicesData = [
  {
    title: 'Ceiling Installation',
    description: 'Professional ceiling installation services including suspended ceilings, plasterboard, and decorative finishes with precision and quality.',
    features: ['Suspended Ceilings', 'Plasterboard', 'Decorative Finishes'],
    image: Image1,
    benefits: [
      'Professional Assessment',
      'Quality Materials',
      'Expert Installation',
      'Warranty Included',
      'Clean-up Service'
    ]
  },
  {
    title: 'Door Installation',
    description: 'Expert door fitting services for interior and exterior doors with precise measurements, quality hardware, and perfect alignment.',
    features: ['Interior Doors', 'Exterior Doors', 'Quality Hardware'],
    image: Image2,
    benefits: [
      'Precise Measurements',
      'Quality Hardware',
      'Perfect Alignment',
      'Security Enhanced',
      'Full Warranty'
    ]
  },
  {
    title: 'Kitchen Units & Wardrobe Fitting',
    description: 'Custom kitchen units and wardrobe installation with meticulous attention to detail, perfect measurements, and flawless finish.',
    features: ['Custom Design', 'Perfect Fit', 'Premium Finish'],
    image: Image3,
    benefits: [
      'Custom Design',
      'Perfect Measurements',
      'Premium Materials',
      'Expert Installation',
      'Lifetime Support'
    ]
  },
  {
    title: 'Painting Services',
    description: 'Professional interior and exterior painting services using premium materials for a durable, beautiful, and long-lasting finish.',
    features: ['Interior Painting', 'Exterior Painting', 'Premium Materials'],
    image: Image4,
    benefits: [
      'Premium Paint',
      'Color Consultation',
      'Surface Preparation',
      'Clean Application',
      'Long-lasting Finish'
    ]
  }
];


const Services: React.FC = () => {

 const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="header">
          <h2 className="title">
            Our Professional{" "}
            <span className={`titleHighlight ${visible ? "visible" : ""}`}>
              Services
            </span>
          </h2>
          <p className="subtitle">
            Delivering excellence in every project with precision, quality, and attention to detail
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-inner">
                {/* Front of card */}
                <div className="card-front">
                  <div className="card-image">
                    <img src={service.image} alt={service.title} />
                    <div className="image-overlay"></div>
                  </div>
                  
                  <div className="card-content">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-description">{service.description}</p>
                    
                    <div className="features">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="card-back">
                  <div className="card-image">
                    <img src={service.image} alt={service.title} />
                    <div className="back-overlay"></div>
                  </div>
                  
                  <div className="back-content">
                    <h4 className="back-title">What You Get</h4>
                    
                    <ul className="benefits-list">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="benefit-item">
                          <CheckCircle className="check-icon" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      className="learn-more-btn"
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="btn-icon" />
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="background-pattern"></div>
    </section>
  );
};

export default Services;