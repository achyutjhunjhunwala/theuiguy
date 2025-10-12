import React from 'react';
import './Certifications.scss';

const certificationsData = [
  {
    id: 1,
    title: 'CKAD',
    fullTitle: 'Certified Kubernetes Application Developer',
    issuer: 'Cloud Native Computing Foundation',
    year: '2023',
    icon: '☸️'
  },
  {
    id: 2,
    title: 'Exam 480',
    fullTitle: 'Programming in HTML5 with JavaScript and CSS3',
    issuer: 'Microsoft',
    year: '2014',
    icon: '🏆'
  }
];

const achievementsData = [
  {
    id: 1,
    stat: '14+',
    label: 'Years Experience',
    description: 'In software engineering and team leadership'
  },
  {
    id: 2,
    stat: '5',
    label: 'Global Brands',
    description: 'Elastic, Pixsy, Adidas, AIMIA, The Body Shop'
  }
];

const Certifications = () => {
  return (
    <section className="certifications section">
      <div className="certifications__container container">
        <header className="certifications__header">
          <h2 className="certifications__title">Certifications & Achievements</h2>
          <p className="certifications__subtitle">
            Recognized expertise in cloud-native technologies and modern web development
          </p>
        </header>

        {/* Certifications Grid */}
        <div className="certifications__grid">
          {certificationsData.map((cert) => (
            <article key={cert.id} className="certifications__card">
              <div className="certifications__card-icon">{cert.icon}</div>
              <div className="certifications__card-content">
                <h3 className="certifications__card-title">{cert.title}</h3>
                <p className="certifications__card-full-title">{cert.fullTitle}</p>
                <div className="certifications__card-meta">
                  <span className="certifications__card-issuer">{cert.issuer}</span>
                  <span className="certifications__card-year">{cert.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="certifications__achievements">
          <h3 className="certifications__achievements-title">Key Achievements</h3>
          <div className="certifications__achievements-grid">
            {achievementsData.map((achievement) => (
              <div key={achievement.id} className="certifications__achievement">
                <span className="certifications__achievement-stat">{achievement.stat}</span>
                <span className="certifications__achievement-label">{achievement.label}</span>
                <p className="certifications__achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
