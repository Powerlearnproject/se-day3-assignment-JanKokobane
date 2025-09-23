import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';
import Image1 from '../../assets/kitckenunit.jpg'
import Image2 from '../../assets/HeroSlide (2).jpg'
import Image3 from '../../assets/HeroSlide (3).jpg'

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [backgroundVisible, setBackgroundVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [slideshowVisible, setSlideshowVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sectionRef = useRef<HTMLElement>(null);

  // Slideshow images - using high-quality stock photos
  const slides = [
    {
      image: Image1,
      title: "Craft with Purpose",
      text: "We design and build furniture that lasts—reducing waste and promoting mindful material use in every project."
    },
    {
      image: Image2,
      title: "Build for Better Living",
      text: "Our installations and fittings are optimized for energy-efficient homes and sustainable lifestyles."
    },
    {
      image: Image3,
      title: "Transform Spaces",
      text: "From custom cupboards to ceiling installations, we bring your vision to life with precision and care."
    }
  ];

  // Loading sequence
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 2500);

    const backgroundTimer = setTimeout(() => {
      setBackgroundVisible(true);
    }, 3000);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 3500);

    const slideshowTimer = setTimeout(() => {
      setSlideshowVisible(true);
    }, 4000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(backgroundTimer);
      clearTimeout(contentTimer);
      clearTimeout(slideshowTimer);
    };
  }, []);

  // Slideshow auto-advance
  useEffect(() => {
    if (!slideshowVisible) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slideshowVisible, slides.length]);

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
  };
    
  return (
    <section 
      className={`${styles.heroSection} ${isLoaded ? styles.loaded : styles.loading}`}
      ref={sectionRef}
    >
      {/* Loading Overlay */}
      <div className={`${styles.loadingOverlay} ${!isLoading ? styles.hidden : ''}`}>
        <div className={styles.loadingContent}>
          <div className={styles.loadingSpinner}></div>
          <div className={styles.loadingText}>Crafting Excellence...</div>
        </div>
      </div>

      {/* Background Image */}
      <div className={`${styles.backgroundImage} ${backgroundVisible ? styles.visible : ''}`}>
        <img 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Background"
        />
      </div>

      <div className={styles.container}>
        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Left Content */}
          <div className={`${styles.leftContent} ${contentVisible ? styles.visible : ''}`}>
            {/* Badge */}
            <div className={`${styles.badge} ${contentVisible ? styles.visible : ''}`}>
              Popular Projects
            </div>

            {/* Title */}
            <h1 className={`${styles.title} ${contentVisible ? styles.visible : ''}`}>
              Discover Our{' '}
              <span className={styles.titleHighlight}>
                Signature
              </span>{' '}
              Creations
            </h1>

            {/* Description */}
            <p className={`${styles.description} ${contentVisible ? styles.visible : ''}`}>
              Join a community that transforms homes and lives—one handcrafted 
              piece at a time. From custom cupboards to ceiling installations, 
              we bring your vision to life with purpose and precision.
            </p>

            {/* CTA Button */}
            <a 
              href="#" 
              className={`${styles.ctaButton} ${contentVisible ? styles.visible : ''}`}
            >
              Get Your Quotation
              <ChevronRight className={styles.ctaIcon} />
            </a>
          </div>

          {/* Right Content - Mini Slideshow */}
          <div className={`${styles.slideshowContainer} ${slideshowVisible ? styles.visible : ''}`}>
            <div className={styles.slideshow}>
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                >
                  <img src={slide.image} alt={slide.title} />
                  <div className={styles.slideContent}>
                    <h3 className={styles.slideTitle}>{slide.title}</h3>
                    <p className={styles.slideText}>{slide.text}</p>
                    <div className={styles.slideProgress}>
                      <div className={styles.slideProgressBar}></div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation Dots */}
              <div className={styles.slideNav}>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.navDot} ${index === currentSlide ? styles.active : ''}`}
                    onClick={() => handleSlideClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className={styles.decorativeElement1}></div>
        <div className={styles.decorativeElement2}></div>
      </div>
    </section>
  );
};

export default Hero;