import React, { useState } from 'react';
import { Menu, X, ChevronDown, Twitter, Facebook, Instagram } from 'lucide-react';
import styles from './Header.module.css';
import Logo from '../../assets/Logo.png'

interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  hasDropdown?: boolean;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', ariaLabel: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', ariaLabel: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', ariaLabel: 'Instagram' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMobileMenu();
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header className={styles.header}>
        <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
          <div className={styles.logoImage}>
            <img src={Logo} />
          </div>
        </a>
        
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            {navigationItems.map((item, index) => (
              <li key={index} className={`${styles.navigationItem} ${item.active ? styles.active : ''}`}>
                <a 
                  href={item.href} 
                  className={styles.navigationLink}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.hasDropdown ? (
                    <span className={styles.navigationSpan}>
                      {item.label}
                      <ChevronDown className={styles.dropdownIcon} />
                    </span>
                  ) : (
                    <span className={styles.navigationSpan}>{item.label}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <nav className={styles.socialNav}>
          <ul className={styles.socialList}>
            {socialLinks.map((social, index) => (
              <li key={index} className={styles.socialItem}>
                <a 
                  href={social.href} 
                  className={styles.socialLink} 
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className={styles.socialIcon} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className={styles.actionsContainer}>
          <button 
            className={styles.contactButton}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact us
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={styles.mobileHeader}>
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
          <div className={styles.logoImage}>
            <img src={Logo} />
          </div>
        </a>
        
        <button
          className={styles.hamburgerButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className={styles.hamburgerIcon} />
          ) : (
            <Menu className={styles.hamburgerIcon} />
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuVisible : ''}`}>
        <nav>
          <ul className={styles.mobileNavigationList}>
            {navigationItems.map((item, index) => (
              <li key={index} className={`${styles.mobileNavigationItem} ${item.active ? styles.active : ''}`}>
                <a 
                  href={item.href} 
                  className={styles.mobileNavigationLink}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className={styles.mobileNavigationSpan}>
                    {item.label}
                    {item.hasDropdown && <ChevronDown className={styles.mobileDropdownIcon} />}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className={styles.mobileSocials}>
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href} 
              className={styles.mobileSocialLink} 
              aria-label={social.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className={styles.mobileSocialIcon} />
            </a>
          ))}
        </div>
        
        <button 
          className={styles.mobileContactButton}
          onClick={(e) => {
            e.preventDefault();
            closeMobileMenu();
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className={styles.backdrop}
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;