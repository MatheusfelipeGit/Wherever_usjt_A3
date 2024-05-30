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
 <section>
 <div className="atalho1 col-md-6">
 <button onClick={() => scrollToSection('dicas-locais')}>Indicações</button>
</div>
<div className="atalho2 col-md-6">
<button onClick={() => scrollToSection('quemsomos-section')}>O que é a Wherever?</button>
</div>
</section>
  )};

export default MyComponent;