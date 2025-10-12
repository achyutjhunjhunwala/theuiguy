import React from 'react';
import './App.scss';

// Import components (will be created next)
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Expertise />
      <Experience />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
