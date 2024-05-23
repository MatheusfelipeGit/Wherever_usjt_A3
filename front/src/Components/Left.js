import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; //import do bootstrap
import '../styles.css'; //import do css

import Whereverimg from '../img/Whereverimg.png';
import Globo2 from '../img/Globo2.png';// import das imagens

function Main() {
  return (
    <main className="container">
      {/* Renderiza o lado esquerdo da página */}
      <LeftSide />
      {/* Renderiza o lado direito da página */}
      {<RightSide />}
    </main>
  );
}

function LeftSide() {
  return (
    <section className="left-side">
      {/* Imagem da Wherever */}
      <img src={Whereverimg} alt="Imagem 1" className="img-fluid flutuante mt-6" />
      {/* Imagem do Globo */}
      <img src={Globo2} alt="Imagem 2" className="img-fluid flutuante mt-6" />
    </section>
  );
}

function RightSide() {
  // Definição dos estados
  const [prompt, setPrompt] = useState(''); // Pergunta
  const [completion, setCompletion] = useState(''); // Resposta
  const [location, setLocation] = useState(''); // Localização

  // Função para enviar a pergunta e obter a resposta
  const enviar = async () => {
    try {
      const response = await axios.post('http://localhost:4000/pergunte-ao-chatgpt', { prompt });
      setCompletion(response.data.completion);
    } catch (error) {
      console.error(error);
    }
  };

  // Função para obter a localização
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setLocation('Geolocalização não é suportada por este navegador.');
    }
  };

  // Função para exibir a posição atual
  const showPosition = (position) => {
    const coords = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    setLocation(coords);
  };

  // Função para tratar erros na obtenção da localização
  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setLocation('Usuário negou a solicitação de Geolocalização.');
        break;
      case error.POSITION_UNAVAILABLE:
        setLocation('As informações de localização não estão disponíveis.');
        break;
      case error.TIMEOUT:
        setLocation('A solicitação para obter a localização do usuário expirou.');
        break;
      case error.UNKNOWN_ERROR:
        setLocation('Ocorreu um erro desconhecido.');
        break;
      default:
        setLocation('Erro ao obter a localização.');
        break;
    }
  };

  return (
    <section className="right-side">
      {/* Input e botão para enviar a pergunta */}
      <label className="respostas">
        <h1>Digite a pergunta:</h1> <input className="perguntas-chat"type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      </label>
      <button className="botao-perguntar" onClick={enviar}>Perguntar</button>
      <input className="respostas-chat" type="text" value={completion} readOnly />
      
      {/* Geolocalização */}
        <h1 className="Paragrafo-geo">Minha localização atual</h1>
        <button className= "botaolocaliza" onClick={getLocation}>Obter Localização</button>
        <p className="location" id="location">Localização: {location}</p>
      

      {/* Seção "Sobre Nós" */}
      <aside id="about-us-section">
        <h1>Como a Wherever pode te ajudar?</h1>
        <p className="paragrafo">
          Com Wherever, você descobre lugares incríveis com apenas um toque. Seja bares aconchegantes, restaurantes requintados, baladas vibrantes ou rooftops com vistas deslumbrantes, tudo está ao seu alcance. Defina seu raio de busca e deixe-nos revelar os tesouros escondidos ao seu redor!
        </p>
      </aside>

      {/* Seção "Quem nós somos" */}
      <article className="quemsomos-section">
        <h1 className="quemsomos-title">Quem nós somos?</h1>
        <p className="quemsomos">Nós somos um grupo de estudantes da Universidade São Judas Tadeu, na Mooca. Desenvolvemos este site como parte de uma atividade curricular, mas nosso objetivo é fazer algo realmente útil para o dia a dia das pessoas. Queremos facilitar a descoberta de lugares incríveis ao redor, colocando nossas habilidades em prática para tornar isso possível.</p>
      </article>

      {/* Atalhos para navegação */}
      <div className="atalhos">
        <button onClick={() => window.location.href='#about-us-section'}>Sobre Nós</button>
        <button onClick={() => window.location.href='#what-is-wherever-section'}>O que é o Wherever?</button>
      </div>
      
    </section>
    
  );
}

export default Main;
