import React from 'react';

function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="atalhos">
      <button onClick={() => scrollToSection('home-section')}>Home</button>
      <button onClick={() => scrollToSection('about-us-section')}>Sobre Nós</button>
      <button onClick={() => scrollToSection('what-is-wherever-section')}>O que é o Wherever?</button>
    </div>
  );
}

export default Navigation;

