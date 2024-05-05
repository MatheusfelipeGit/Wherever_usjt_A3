import React from 'react';

  return (
    <div className="atalhos">
      <button onClick={() => scrollToSection('about-us-section')}>Sobre Nós</button>
      <button onClick={() => scrollToSection('what-is-wherever-section')}>O que é o Wherever?</button>
    </div>
  );
  
export default Navigation;