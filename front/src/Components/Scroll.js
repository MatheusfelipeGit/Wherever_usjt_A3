import React from "react";

//isso aqui determina o parametro de scroll (no caso o id) e manda descer no jeito smooth
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
 };
  
 //nome deles é atalhos no css
 //essa função basicamente faz com que a tela faça um scroll até o id indicado 

 function MyComponent() {
  return (
 <div className="atalhos">
 <button onClick={() => scrollToSection('dicas-locais')}>Indicações</button>
 <button onClick={() => scrollToSection('quemsomos-section')}>O que é o Wherever?</button>
</div>
  )};

export default MyComponent;