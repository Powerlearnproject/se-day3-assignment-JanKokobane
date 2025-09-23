import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';
import Logo from '../../assets/Logo.png'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    if (href === '#home') {
      scrollToTop();
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Ceiling Installation',
    'Door Installation',
    'Kitchen Units & Wardrobe Fitting',
    'Painting Services'
  ];

  const products = [
    'Custom Cupboards',
    'Dining Tables',
    'TV Stands',
    'Wardrobes',
    'Bedside Pedestals',
    'Wine Racks'
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brandSection}>

            <a href="#home"><div className={styles.logoImage}><img src={Logo} /></div></a>
            
            <p className={styles.brandDescription}>
              Crafting beautiful, functional furniture and providing expert installation 
              services across South Africa for over 8 years. Your vision, our craftsmanship.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <social.icon className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Quick Links</h3>
              <ul className={styles.linkList}>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={styles.footerLink}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Our Services</h3>
              <ul className={styles.linkList}>
                {services.map((service, index) => (
                  <li key={index}>
                    <span className={styles.serviceItem}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Products</h3>
              <ul className={styles.linkList}>
                {products.map((product, index) => (
                  <li key={index}>
                    <span className={styles.serviceItem}>{product}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.contactSection}>
            <h3 className={styles.columnTitle}>Contact Info</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <a href="mailto:crystalfaithprojects@gmail.com" className={styles.contactLink}>
                  crystalfaithprojects@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <a href="tel:0660339993" className={styles.contactLink}>
                  066 033 9993
                </a>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span className={styles.contactText}>South Africa Wide</span>
              </div>
            </div>
            <div className={styles.workingHours}>
              <h4 className={styles.hoursTitle}>Working Hours</h4>
              <p className={styles.hoursText}>
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} Crystal Faith Projects. All rights reserved.</p>
          </div>
          <div className={styles.scrollTop}>
            <button
              onClick={scrollToTop}
              className={styles.scrollButton}
              aria-label="Scroll to top"
            >
              <ArrowUp className={styles.scrollIcon} />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;