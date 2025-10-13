import React, { useState } from 'react';
import './Hero.scss';

const Hero = () => {
  const [logoError, setLogoError] = useState(false);
  const [profileError, setProfileError] = useState(false);

  // Image paths from public folder
  const logoPath = '/logo.png';
  const profilePath = '/profile.png';

  // Calculate years of experience dynamically (started in 2011)
  const startYear = 2011;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <section className="hero">
      <div className="hero__container container">
        {/* Logo at top */}
        <header className="hero__header">
          <div className="hero__logo">
            {!logoError ? (
              <img
                src={logoPath}
                alt="TheUiGuy Logo"
                className="hero__logo-img"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="hero__logo-placeholder">
                <span>&lt;TUG/&gt;</span>
              </div>
            )}
          </div>
        </header>

        {/* Split Content Area */}
        <div className="hero__main">
          {/* Left: Text Content */}
          <div className="hero__content">
            <h1 className="hero__title">
              THE <span className="hero__title-highlight">UI GUY</span>
            </h1>
            
            <p className="hero__name">Achyut Jhunjhunwala</p>

            <div className="hero__subtitle">
              <p className="hero__subtitle-line">{yearsOfExperience} years of Craft</p>
            </div>

            <div className="hero__current">
              <span className="hero__current-label">Currently</span>
              <span className="hero__current-company">
                Building Observability at <span className="hero__current-highlight">Elastic</span>
              </span>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="hero__profile">
            {!profileError ? (
              <img
                src={profilePath}
                alt="Achyut Jhunjhunwala"
                className="hero__profile-img"
                onError={() => setProfileError(true)}
              />
            ) : (
              <div className="hero__profile-placeholder">
                <span>AJ</span>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll">
          <div className="hero__scroll-line"></div>
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
