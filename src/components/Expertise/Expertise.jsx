import React from 'react';
import './Expertise.scss';

const expertiseData = [
  {
    id: 1,
    title: 'Frontend Architecture',
    description: 'Building scalable React applications with TypeScript. Performance optimization and modern UI patterns.',
    skills: ['React', 'TypeScript', 'Performance', 'UI/UX']
  },
  {
    id: 2,
    title: 'Backend Engineering',
    description: 'Architecting high-performance APIs handling millions of requests. REST, GraphQL, and microservices.',
    skills: ['Node.js', 'REST APIs', 'GraphQL', 'Microservices']
  },
  {
    id: 3,
    title: 'DevOps & Cloud',
    description: 'Kubernetes certified. Cloud migrations, CI/CD pipelines, automation, and serverless architectures.',
    skills: ['Kubernetes', 'CI/CD', 'Cloud', 'Serverless']
  },
  {
    id: 4,
    title: 'Technical Leadership',
    description: 'Leading teams and architecting solutions. 14 years of experience delivering projects for global brands.',
    skills: ['Architecture', 'Team Lead', 'Scalability', 'Mentorship']
  }
];

const Expertise = () => {
  return (
    <section className="expertise section">
      <div className="expertise__container container">
        <header className="expertise__header">
          <h2 className="expertise__title">Expertise</h2>
          <p className="expertise__subtitle">
            Full-stack JavaScript engineer with deep expertise across the entire development lifecycle
          </p>
        </header>

        <div className="expertise__grid">
          {expertiseData.map((item) => (
            <article key={item.id} className="expertise__card">
              <div className="expertise__card-number">{String(item.id).padStart(2, '0')}</div>
              <h3 className="expertise__card-title">{item.title}</h3>
              <p className="expertise__card-description">{item.description}</p>
              <ul className="expertise__card-skills">
                {item.skills.map((skill, index) => (
                  <li key={index} className="expertise__card-skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
