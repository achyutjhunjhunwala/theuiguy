import React from 'react';
import './Footer.scss';

const contactLinks = [
  {
    id: 1,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/theuiguy',
    icon: '💼',
    description: 'Connect professionally'
  },
  {
    id: 2,
    label: 'GitHub',
    url: 'https://github.com/achyutjhunjhunwala',
    icon: '💻',
    description: 'View my code'
  },
  {
    id: 3,
    label: 'Blog',
    url: 'https://blog.theuiguy.com/',
    icon: '✍️',
    description: 'Read my articles'
  },
  {
    id: 4,
    label: 'Email',
    url: 'mailto:achyut@theuiguy.com',
    icon: '📧',
    description: 'Get in touch'
  },
  {
    id: 5,
    label: 'Berlin, Germany',
    url: null,
    icon: '📍',
    description: 'Current location'
  }
];

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container">
        <div className="footer__content">
          <header className="footer__header">
            <h2 className="footer__title">Let's Connect</h2>
            <p className="footer__subtitle">
              Open to discussing new opportunities, collaborations, or just connecting with fellow engineers
            </p>
          </header>

          <div className="footer__links">
            {contactLinks.map((link) => (
              link.url ? (
                <a
                  key={link.id}
                  href={link.url}
                  className="footer__link"
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`${link.label} - ${link.description}`}
                >
                  <span className="footer__link-icon">{link.icon}</span>
                  <div className="footer__link-content">
                    <span className="footer__link-label">{link.label}</span>
                    <span className="footer__link-description">{link.description}</span>
                  </div>
                </a>
              ) : (
                <div key={link.id} className="footer__link footer__link--static">
                  <span className="footer__link-icon">{link.icon}</span>
                  <div className="footer__link-content">
                    <span className="footer__link-label">{link.label}</span>
                    <span className="footer__link-description">{link.description}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Achyut Jhunjhunwala
          </p>
          <p className="footer__tagline">
            THE UI GUY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
