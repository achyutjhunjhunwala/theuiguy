import React from 'react';
import './Experience.scss';

const experienceData = [
  {
    id: 1,
    company: 'Elastic',
    role: 'Senior Software Engineer',
    period: '2023 - Present',
    duration: '2 years',
    description: 'Building scalable solutions for enterprise search and observability.',
    current: true
  },
  {
    id: 2,
    company: 'Pixsy',
    role: 'Senior Software Engineer',
    period: '2021 - 2022',
    duration: '1.5 years',
    description: 'Developed image rights management and copyright protection platform.'
  },
  {
    id: 3,
    company: 'Adidas',
    role: 'Senior Full Stack Developer & Frontend Architect',
    period: '2015 - 2021',
    duration: '6 years',
    description: 'Led frontend architecture for campaign tools, CMS automation, and B2B collaboration platforms handling millions of requests daily.',
    highlight: true
  },
  {
    id: 4,
    company: 'AIMIA',
    role: 'UI Developer',
    period: '2014 - 2015',
    duration: '1.5 years',
    description: 'Built SaaS loyalty platform for major UK retailers.'
  },
  {
    id: 5,
    company: 'The Body Shop PLC',
    role: 'Frontend Developer',
    period: '2011 - 2014',
    duration: '3 years',
    description: 'E-commerce frontend development and loyalty program rebranding.'
  }
];

const Experience = () => {
  return (
    <section className="experience section">
      <div className="experience__container container">
        <header className="experience__header">
          <h2 className="experience__title">Experience</h2>
          <p className="experience__subtitle">
            14 years delivering solutions for global brands across e-commerce, enterprise, and SaaS
          </p>
        </header>

        <div className="experience__stats">
          <div className="experience__stat">
            <span className="experience__stat-number">14+</span>
            <span className="experience__stat-label">Years</span>
          </div>
          <div className="experience__stat">
            <span className="experience__stat-number">5</span>
            <span className="experience__stat-label">Companies</span>
          </div>
        </div>

        <div className="experience__timeline">
          {experienceData.map((item) => (
            <article
              key={item.id}
              className={`experience__item ${item.current ? 'experience__item--current' : ''} ${item.highlight ? 'experience__item--highlight' : ''}`}
            >
              <div className="experience__item-marker"></div>
              <div className="experience__item-content">
                <div className="experience__item-header">
                  <h3 className="experience__item-company">
                    {item.company}
                    {item.current && <span className="experience__item-badge">Current</span>}
                  </h3>
                  <span className="experience__item-duration">{item.duration}</span>
                </div>
                <p className="experience__item-role">{item.role}</p>
                <p className="experience__item-period">{item.period}</p>
                <p className="experience__item-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
