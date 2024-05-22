import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

import Whereverimg from '../img/Whereverimg.png';
import Globo2 from '../img/Globo2.png';



function Aboutus() {
  const [prompt, setPrompt] = useState("");
  const [completion, setCompletion] = useState("");
  const [location, setLocation] = useState("");
  const [coords, setCoords] = useState("");

  const enviar = async () => {
    try {
      const response = await axios.post('http://localhost:4000/pergunte-ao-chatgpt', { prompt });
      setCompletion(response.data.completion);
    } catch (error) {
      console.error(error);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setLocation("Geolocalização não é suportada por este navegador.");
    }
  };

  const showPosition = (position) => {
    const coordsString = `Latitude: ${position.coords.latitude} <br>Longitude: ${position.coords.longitude}`;
    setCoords(coordsString);
  };

  const showError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        setLocation("Usuário negou a solicitação de Geolocalização.");
        break;
      case error.POSITION_UNAVAILABLE:
        setLocation("As informações de localização não estão disponíveis.");
        break;
      case error.TIMEOUT:
        setLocation("A solicitação para obter a localização do usuário expirou.");
        break;
      case error.UNKNOWN_ERROR:
        setLocation("Ocorreu um erro desconhecido.");
        break;
    }
  };

  return (
    <div className="container my-4">

      <main className="row">

      <section className="col-md-3 mb-4">

        <img src={Whereverimg} alt="Imagem 1" className="img-fluid" />

      </section>

      <section className="col-md-3 mb-4">

        <img src={Globo2} alt="Imagem 2" className="img-fluid flutuante mt-3" />

      </section>
      
        <section className="col-md-6">

        <div className="row">
  <div className="col-md-6">
    <div className="mb-4">
      <label className="form-label">Digite a pergunta:</label>
      <input type="text" className="form-control" value={prompt} onChange={(e) => setPrompt(e.target.value)} style={{ minHeight: "25px", minWidth: "100px" }}/>
    </div>
    <button className="btn btn-primary mb-3">Perguntar</button>
    <input type="text" className="form-control mb-5" value={completion} readOnly style={{ minHeight: "25px", minWidth: "100px" }}/>
  </div>
  <div className="bg-light p-3 rounded">
  <h5 className="mb-3">Minha localização atual</h5>
  <button className="btn btn-secondary mb-3" onClick={getLocation}>Obter Localização</button>
  <div className="d-flex flex-wrap">
    <p id="location" className="mb-0 me-3">Localização:</p>
    <p id="coords" dangerouslySetInnerHTML={{ __html: coords }} className="mb-0"></p>
  </div>
  </div>
</div>


          <aside id="about-us-section" className="mt-4">

            <h1>Como a Wherever pode te ajudar?</h1>

            <p className="paragrafo">

              Com Wherever, você descobre lugares incríveis com apenas um toque. Seja bares aconchegantes, restaurantes requintados, baladas vibrantes ou rooftops com vistas deslumbrantes, tudo está ao seu alcance. Defina seu raio de busca e deixe-nos revelar os tesouros escondidos ao seu redor!
            </p>

          </aside>

          <article className="quemsomos-section mt-4">

            <h1 className="quemsomos-title">Quem nós somos?</h1>

            <p className="quemsomos">

              Nós somos um grupo de estudantes da Universidade São Judas Tadeu, na Mooca. Desenvolvemos este site como parte de uma atividade curricular, mas nosso objetivo é fazer algo realmente útil para o dia a dia das pessoas. Queremos facilitar a descoberta de lugares incríveis ao redor, colocando nossas habilidades em prática para tornar isso possível.
           
            </p>
          </article>


          <div className="atalhos mt-4">
           
            <button className="btn btn-info mr-2" onClick={() => window.location.href = '#about-us-section'}>Sobre Nós</button>
            
            <button className="btn btn-info" onClick={() => window.location.href = '#what-is-wherever-section'}>O que é o Wherever?</button>
          
          </div>
        
        </section>
      
      </main>
    </div>
  );
}

export default Aboutus;
