import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import styles from './Contacts.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Ceiling Installation',
    'Door Installation',
    'Kitchen Units & Wardrobe Fitting',
    'Painting Services',
    'Custom Furniture',
    'General Consultation'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.formGroup}>
          <div className={styles.content}>
            <span className={styles.topper}>Get in Touch</span>
            <h2 className={styles.title}>Ready to Start Your Project?</h2>
          </div>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Name *
              <input 
                className={styles.input} 
                required 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Please enter your full name:"
              />
            </label>
            
            <label className={`${styles.label} ${styles.email}`}>
              Email *
              <input 
                className={styles.input} 
                required 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="PLease enter your email"
              />
            </label>
            
            <label className={`${styles.label} ${styles.phone}`}>
              Phone *
              <input 
                className={styles.input} 
                required 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+27...."
              />
            </label>

            <label className={styles.label}>
              Service Needed *
              <select
                className={`${styles.input} ${styles.select}`}
                required
                name="service"
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="">Select a service...</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
            
            <label className={styles.label}>
              Project Details *
              <textarea 
                className={`${styles.input} ${styles.textarea}`} 
                required 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your project, including dimensions, materials preferences, timeline, and any specific requirements..."
              />
            </label>
            
            <button 
              className={`${styles.buttonSolid} ${styles.submit} ${isSubmitted ? styles.success : ''}`} 
              type="submit"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <>
                  <div className={styles.spinner}></div>
                  Sending Message...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className={styles.successIcon} />
                  Message Sent Successfully!
                </>
              ) : (
                <>
                  <Send className={styles.sendIcon} />
                  Send Message
                </>
              )}
            </button>

            {isSubmitted && (
              <div className={styles.successMessage}>
                <p>Thank you for your message! We'll get back to you within 24 hours.</p>
              </div>
            )}
          </form>
        </div>
        
        <div className={styles.infoGroup}>
          <div className={styles.info}>
            <span className={styles.topper}>Service Area</span>
            <span className={styles.detail}>South Africa Wide<br />Professional Home Improvement</span>
          </div>
          <div className={styles.info}>
            <span className={styles.topper}>Working Hours</span>
            <span className={styles.detail}>Monday - Friday: 8AM - 6PM</span>
            <span className={styles.detail}>Saturday: 9AM - 4PM</span>
          </div>
          <div className={styles.info}>
            <span className={styles.topper}>Contact</span>
            <span className={styles.detail}>Phone: +2766 053 9993</span>
            <span className={styles.detail}>Email: crystalfaithprojects@gmail.com</span>
          </div>
        </div>
      </div>

      <div className={styles.pictureGroup}>
        <iframe 
          className={styles.iframe} 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.038285131089!2d28.047315!3d-26.204103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1717096613140!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          style={{border: 0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />

        <img 
          className={`${styles.graphic} ${styles.top} ${styles.light}`} 
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gym-hero-shape-top-light.svg" 
          alt="graphic" 
          height="161" 
          width="1920" 
          loading="lazy" 
        />
        <img 
          className={`${styles.graphic} ${styles.left} ${styles.light}`} 
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gym-hero-shape-top-light.svg" 
          alt="graphic" 
          height="161" 
          width="1920" 
          loading="lazy" 
        />
        <img 
          className={`${styles.graphic} ${styles.bottom} ${styles.light}`} 
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gym-hero-shape-top-light.svg" 
          alt="graphic" 
          height="161" 
          width="1920" 
          loading="lazy" 
        />

        <img 
          className={`${styles.graphic} ${styles.top} ${styles.dark}`} 
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gym-hero-shape-top-dark.svg" 
          alt="graphic" 
          height="161" 
          width="1920" 
          loading="lazy" 
        />
        <img 
          className={`${styles.graphic} ${styles.left} ${styles.dark}`} 
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gym-hero-shape-top-dark.svg" 
          alt="graphic" 
          height="161" 
          width="1920" 
          loading="lazy" 
        />
        <img 
          className={`${styles.graphic} ${styles.bottom} ${styles.dark}`} 
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gym-hero-shape-top-dark.svg" 
          alt="graphic" 
          height="161" 
          width="1920" 
          loading="lazy" 
        />
      </div>
    </section>
  );
};

export default Contact;