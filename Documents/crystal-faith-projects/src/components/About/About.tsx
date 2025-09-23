import React from 'react';
import { Target } from 'lucide-react';
import styles from './About.module.css';
import AboutImage from '../../assets/About.jpg'
import ourMission from '../../assets/HeroSlide (4).jpg'
import Image1 from '../../assets/cfp.jpg'
import Image2 from '../../assets/cfp2.jpg'

const About: React.FC = () => {
  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'Every piece we create is built to the highest standards using premium materials and time-tested techniques.'
    },
    {
      title: 'Customer Focused',
      description: 'We listen to your needs and work closely with you to bring your vision to life, ensuring complete satisfaction.'
    },
    {
      title: 'Reliable Service',
      description: 'We respect your time and deliver projects on schedule, with clear communication throughout the process.'
    },
    {
      title: 'Passionate Work',
      description: 'We love what we do, and it shows in every detail of our craftsmanship and customer service.'
    }
  ];

  const teamMembers = [
    {
      name: 'Master Craftsperson',
      role: 'Lead Designer & Builder',
      image: Image1
    },
    {
      name: 'Senior Craftsperson',
      role: 'Installation Specialist',
      image: Image2
    }
  ];

  return (
    <div className={styles.aboutContainer} id="about">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              About <span className={styles.brandName}>Crystal Faith Projects</span>
            </h1>
            <h2 className={styles.heroSubtitle}>Crafting Dreams Into Reality</h2>
            <div className={styles.heroDescription}>
              <p>
                For over 8 years, Crystal Faith Projects has been transforming homes across South Africa 
                with custom furniture and professional installation services. What started as a passion 
                for woodworking has grown into a trusted name in home improvement.
              </p>
              <p>
                We believe that every home deserves furniture that perfectly fits both your space and 
                lifestyle. From the initial consultation to the final installation, we're committed to 
                delivering exceptional quality and service that exceeds expectations.
              </p>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src={AboutImage} 
              alt="Craftsman working on custom furniture"
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* Core Values and Team Section */}
      <section className={styles.valuesTeamSection}>
        <div className={styles.sectionContent}>
          <div className={styles.valuesTeamGrid}>
            {/* Core Values - Left Side */}
            <div className={styles.valuesColumn}>
              <h3 className={styles.columnTitle}>Our <span className={styles.brandName}>Core Values</span></h3>
              <div className={styles.valuesList}>
                {values.map((value, index) => {
                  return (
                    <div key={index} className={styles.valueItem}>

                      <div className={styles.valueContent}>
                        <h4 className={styles.valueTitle}>{value.title}</h4>
                        <p className={styles.valueDescription}>{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Team - Right Side */}
            <div className={styles.teamColumn}>
              <h3 className={styles.columnTitle}></h3>
              <p className={styles.teamSubtitle}>Meet our Team</p>
              <div className={styles.teamList}>
                {teamMembers.map((member, index) => (
                  <div key={index} className={styles.teamMember}>
                    <div className={styles.memberPhoto}>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className={styles.memberImg}
                      />
                    </div>
                    <div className={styles.memberInfo}>
                      <h4 className={styles.memberName}>{member.name}</h4>
                      <p className={styles.memberRole}>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <div className={styles.missionIcon}>
              <Target size={40} />
            </div>
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionDescription}>
              To transform houses into homes through exceptional craftsmanship, personalized service, 
              and sustainable practices. We're not just building furniture—we're creating spaces where 
              families gather, memories are made, and life unfolds beautifully.
            </p>
          </div>
          <div className={styles.missionImage}>
            <img 
              src={ourMission} 
              alt="Beautiful custom furniture in modern home"
              className={styles.missionImg}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;