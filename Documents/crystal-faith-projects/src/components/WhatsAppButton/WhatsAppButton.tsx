import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 5000);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    setShowForm((prev) => !prev);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = '+27660539993';
    const message = encodeURIComponent(
      `Hi Crystal Faith Projects 👋\n\nName: ${name}\nEmail: ${email}\nMessage: ${userMessage}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Reset form and close
    setName('');
    setEmail('');
    setUserMessage('');
    setShowForm(false);
  };

  const handleTooltipClose = () => {
    setShowTooltip(false);
  };

  const isFormValid = name.trim() && email.trim() && userMessage.trim();

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
        aria-label="Open WhatsApp chat form"
      >
        <img
          src="https://img.icons8.com/color/48/whatsapp--v1.png"
          alt="WhatsApp logo"
          className={styles.whatsappIcon}
        />
        <div className={styles.ripple}></div>
      </button>

      {showForm && (
        <form className={styles.chatForm} onSubmit={handleFormSubmit}>
          <h4>Send us a WhatsApp</h4>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className={styles.sendButton}
            disabled={!isFormValid}
          >
            Send via WhatsApp
          </button>
        </form>
      )}
    </div>
  );
};

export default WhatsAppButton;
