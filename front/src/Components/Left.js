import React, { useState } from 'react';
import axios from "axios";
import scrollToSection from "./Navigation";

import 'bootstrap/dist/css/bootstrap.min.css'; //import do bootstrap
import '../styles.css'; //import do css

import Whereverimg from '../img/Whereverimg.png';
import Globo2 from '../img/Globo2.png';// import das imagens

import Boliche from '../img/Boliche.jpeg';
import Barzinho from '../img/Barzinho.jpeg';// import das imagens
import Restauranterizz from '../img/Restauranterizz.jpeg';// import das imagens

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
    <div className="left-side">
    <section className="imgWherever">
      {/* Imagem da Wherever */}
      <img src={Whereverimg} alt="Imagem 1" className="img-fluid flutuante mt-6" />
      <section className="imgGlobo">
      {/* Imagem do Globo */}
      <img src={Globo2} alt="Imagem 2" className="img-fluid flutuante mt-6" />
      </section>
      </section>
      </div>
  );
}

function RightSide() {
  // Definição dos estados
  const [prompt, setPrompt] = useState(''); // Pergunta
  const [completion, setCompletion] = useState(''); // Resposta
  //const [location, setLocation] = useState(''); // Localização

  // Função para enviar a pergunta e obter a resposta
  const enviar = async () => {
    try {
      const response = await axios.post('http://localhost:4000/pergunte-ao-chatgpt', { prompt });
      setCompletion(response.data.completion);
    } catch (error) {
      console.error(error);
    }
  };

  // // Função para obter a localização
  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition, showError);
  //   } else {
  //     setLocation('Geolocalização não é suportada por este navegador.');
  //   }
  // };

  // // Função para exibir a posição atual
  // const showPosition = (position) => {
  //   const coords = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
  //   setLocation(coords);
  // };

  // // Função para tratar erros na obtenção da localização
  // const showError = (error) => {
  //   switch (error.code) {
  //     case error.PERMISSION_DENIED:
  //       setLocation('Usuário negou a solicitação de Geolocalização.');
  //       break;
  //     case error.POSITION_UNAVAILABLE:
  //       setLocation('As informações de localização não estão disponíveis.');
  //       break;
  //     case error.TIMEOUT:
  //       setLocation('A solicitação para obter a localização do usuário expirou.');
  //       break;
  //     case error.UNKNOWN_ERROR:
  //       setLocation('Ocorreu um erro desconhecido.');
  //       break;
  //     default:
  //       setLocation('Erro ao obter a localização.');
  //       break;
  //   }
  // };

  return (
    <section className="right-side">
      {/* Geolocalização
        <h1 className="Paragrafo-geo">Minha localização atual</h1>
        <button className= "botaolocaliza" onClick={getLocation}>Obter Localização</button>
        <p className="location" id="location">Localização: {location}</p>
       */}

      {/* Seção "Sobre Nós" */}
      <aside id="about-us-section">
        <h1>Como a Wherever pode te ajudar?</h1>
        <p className="paragrafo">
          Com Wherever, você descobre lugares incríveis com apenas um toque. Seja bares aconchegantes, restaurantes requintados, baladas vibrantes ou rooftops com vistas deslumbrantes, tudo está ao seu alcance. Defina seu raio de busca e deixe-nos revelar os tesouros escondidos ao seu redor!
        </p>
      </aside>

      {/* Input e botão para enviar a pergunta */}
      <label className="respostas">
        <h1>Digite a pergunta:</h1> <input className="perguntas-chat"type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      </label>
      <button className="botao-perguntar" onClick={enviar}>Perguntar</button>
      <input className="respostas-chat" type="text" value={completion} readOnly />

      <div className="dicas-locais">

        <div className="interface">

          <h2 className="titulo">Dicas Wherever:</h2>

          <h2 className="sub-titulo"> Olá somos Wherever , estamos aqui para te ajudar a ter sua melhor experiencia  e apreciar os melhores momentos. Veja algumas de nossas dicas e avaliações sobre restaurantes e locais descontraídos que você pode conhecer. </h2>
          
          <div className="flex">

            <div className="especialidades-box">

            <img src={Restauranterizz} alt="Imagem 5" className="img-fluid" />
             
              <h3> Rodizio de Risoto SP </h3>
              <p>Estamos falando do Rizz Restaurante, são 24 sabores de risotos, inclusive com 10 opções vegetarianas e cada mesa pode escolher 6 opções para comer à vontade! <br/>
                A partir de R$79,90 com entradinha de aranchini incluso. Horário de funcionamento: terça a sexta: 18H30 as 23h30.<br/>
                ⭐ Avaliações da Web 5/5 <br/>
                📍 Alameda Iraé, 398 - Moema.
              </p>
            </div>
            <div className="especialidades-box">
            <img src={Barzinho} alt="Imagem 4" className="img-fluid" />
              <h3> O bar mais descolado de São Paulo </h3>
              <p> O Venancio Restauante Bar , aqui você vai encontrar coquetéis autorais e gastronomia contemporânea. Alguns dos pratos e drinks: <br/>
                Bruschetta de Jamon R$ 49,90 e Brie empanado R$ 93,90 bebidas Gin Royale R$ 44,89 e Cha Mitter R$39,98. Horários de funcionamento: 12h as 01h pode variar conforme o dia </p> 
              <p>⭐ Avaliações da Web 4,3 <br/> 📍 Rua Serra de Japi, 789 - Tatuapé </p>
            </div>
            <div className="especialidades-box">
            <img src={Boliche} alt="Imagem 3" className="img-fluid" />

              <h3> Que tal conhecer o maior boliche de São Paulo ? estamos falando do Villa Bowling</h3>
              <p> O lugar é ideal para você ir com a galera e curtir um happy hour , inspirado nos boliches de Las Vegas, com ambiente amplo e pistas profissionais o lugar é simplesmente sensacional.</p>
              <p> Por lá você encontra comida boa com o restaurante Johnny Rockets, que tem os maiores clássico burgers com sabor dos anos 80. Horário de funcionamento Domingo á Quinta: 11h ás 00h Sexta e Sábado: 11h ás 01h<br/> ⭐ Avaliações da Web 4,2 <br/> 📍3 unidades em SP: Shopping Vila Olímpia, Shopping West Plaza e Shopping Center Norte </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção "Quem nós somos" */}
      <article className="quemsomos-section">
        <h1 className="quemsomos-title">Quem nós somos?</h1>
        <p className="quemsomos">Nós somos um grupo de estudantes da Universidade São Judas Tadeu, na Mooca. Desenvolvemos este site como parte de uma atividade curricular, mas nosso objetivo é fazer algo realmente útil para o dia a dia das pessoas. Queremos facilitar a descoberta de lugares incríveis ao redor, colocando nossas habilidades em prática para tornar isso possível.</p>
      </article>

      {/* Atalhos para navegação */}
      <div className="atalhos">
  <button onClick={() => scrollToSection('about-us-section')}>Indicações</button>
  <button onClick={() => scrollToSection('what-is-wherever-section')}>O que é o Wherever?</button>
</div>

      
    </section>
    
  );
}

export default Main;
