import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Show tooltip after 3 seconds when visible
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '27660339993'; // South African number format
    const message = encodeURIComponent(
      'Hi Crystal Faith Projects! I found your website and I\'m interested in your services. Could we discuss my project requirements?'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleTooltipClose = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.whatsappContainer}>
      {showTooltip && (
        <div className={styles.tooltip}>
          <button 
            className={styles.tooltipClose}
            onClick={handleTooltipClose}
            aria-label="Close tooltip"
          >
            <X className={styles.closeIcon} />
          </button>
          <div className={styles.tooltipContent}>
            <h4 className={styles.tooltipTitle}>Need a Quick Quote?</h4>
            <p className={styles.tooltipText}>
              Chat with us on WhatsApp for instant support and free consultations!
            </p>
          </div>
        </div>
      )}
      
      <button
        onClick={handleWhatsAppClick}
        className={styles.whatsappButton}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className={styles.whatsappIcon} />
        <div className={styles.ripple}></div>
      </button>
    </div>
  );
};

export default WhatsAppButton;