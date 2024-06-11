import React, { useState } from 'react';
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css'; //import do bootstrap
import '../styles.css'; //import do css

import Whereverimg from '../img/Whereverimg.png';
import Globo2 from '../img/Globo2.png';// import das imagens

import Boliche from '../img/Boliche.jpeg';
import Barzinho from '../img/Barzinho.png';// import das imagens
import Restauranterizz from '../img/Restauranterizz.png';// import das imagens



function Main() {
  return (
    <main className="container-fluid">
      {/* Renderiza o lado esquerdo da página */}
      <div className="row">
        <div className="col-md-3">
          <LeftSide />
        </div>
        {/* Renderiza o lado direito da página */}
        <div className="col-md-9">
          <RightSide />
        </div>
      </div>
    </main>
  );
}

function LeftSide() {
  return (
    <div className="left-side">
      <section className="imgWherever">
        {/*Imagem da Wherever */}
        <img src={Whereverimg} alt="Imagem 1" className="img-fluid flutuante mt-md-3" />
        <section className="imgGlobo">
          {/* Imagem do Globo */}
          <img src={Globo2} alt="Imagem 2" className="img-fluid flutuante mt-md-3" />
        </section>
      </section>
    </div>
  );
}

function RightSide() {
  // Definição dos estados
  const [prompt, setPrompt] = useState(''); // Pergunta
  const [completion, setCompletion] = useState(''); // Resposta
  const [estado, setEstado] = useState('');
  const [regiao, setRegiao] = useState('');
  const [local, setLocal] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

   // Função para enviar a mensagem para o servidor que recebe os dados
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3033/mensagens', { message });
      setResponse(res.data.message);
    } catch (error) {
      console.error('There was an error sending the data!', error);
    }
  };

// cada um tem seu handlechange para as mudanças
  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
  };

  const handleRegiaoChange = (e) => {
    setRegiao(e.target.value);
  };

  const handleLocalChange = (e) => {
    setLocal(e.target.value);
  };



  // Função para enviar a pergunta e obter a resposta do GPT
  const enviar = async () => {
    //deixa uma pergunta semi pronta, o que muda é os ${} - interpolação de string 
    const fullPrompt = `Me fale um(a) ${local} na ${regiao} de ${estado}`;
    try {
      const response = await axios.post('http://localhost:4000/chatgpt', { prompt: fullPrompt });
      console.log(response.data); // Verificar o formato da resposta no console
      setCompletion(response.data.completion);

      if (fullPrompt) {
        try {
          await axios.put('http://localhost:3033/mensagens', { question: fullPrompt, answer: response.data.completion });
        } catch (error) {
          console.error(error); // Certifique-se de que os erros estão sendo tratados corretamente
        }
      }
    } catch (error) {
      console.error(error); // Certifique-se de que os erros estão sendo tratados corretamente
    }
  };

  

  return (
    <section className="right-side">
    {/* Seção "Sobre Nós" */}
    <section className="about-us-section">
      <h1 className="about-us-title">Como a Wherever pode ajudar?</h1>
      <div className="steps">
        <p className="step">
          <span className="step-number">1.</span>
          <span className="step-text">Está pensando em sair para algum lugar e não conhece sobre? Pode ficar tranquilo. No nosso site você pode procurar algum local gastronomico dentro das regigões selecionadas!</span>
        </p>
        <p className="step">
          <span className="step-number">2.</span>
          <span className="step-text">Sabe aquela duvida entre lugares para ir? A Wherever consegue te ajudar de forma simples e rápida!</span>
        </p>
        <p className="step">
          <span className="step-number">3.</span>
          <span className="step-text">Basta você selecionar seu Estado, depois sua Região e por último mas não menos importante, selecionar o local que deseja ir. Após isso só clicar em "buscar" e aguardar os resultados!</span>
        </p>
        {/* Adicione mais etapas conforme necessário */}
      </div>
    </section>  

      {/* Input e botão para enviar a pergunta */}
      <h1 className="digite-a-pergunta">Monte sua pergunta:</h1>

      <div className="answers">
      {/* valor estado é uma váriavel que tem uma função para quando o valor mudar  */}
          <select className="respostas1" value={estado} onChange={handleEstadoChange}>
                
          <option value="">Escolha o Estado</option> 
          <option value="São Paulo">São Paulo</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Minas Gerais">Minas Gerais</option>
          <option value="Espirito Santo">Espirito Santo</option>

        </select>


        {/* valor região é uma váriavel que tem uma função para quando o valor mudar  */}
        <select className="respostas2" value={regiao} onChange={handleRegiaoChange}>
          <option value="">Escolha a região</option>
          <option value="Zona Sul">Zona Sul</option>
          <option value="Zona Norte">Zona Norte</option>
          <option value="Zona Leste">Zona Leste</option>
          <option value="Zona Oeste">Zona Oeste</option>
          <option value="Centro">Centro</option>
        </select>


        {/* valor local é uma váriavel que tem uma função para quando o valor mudar  */}
        <select className="respostas3" value={local} onChange={handleLocalChange}>
          <option value="">Escolha o lugar</option>
          <option value="Restaurante de comida Japonesa">Restaurante de comida Japonesa</option>
          <option value="Restaurante italiano">Restaurante italiano</option>
          <option value="Restaurante vegano">Restaurante vegano</option>
          <option value="Churrascaria">Churrascaria</option>
          <option value="Hamburgueria">Hamburgueria</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Bistro">Bistro</option>
          <option value="Barzinho">Barzinho</option>
        </select>

        <button className="botao-perguntar" onClick={enviar}>Perguntar</button>
        </div>
      

      <textarea className="respostas-chat" type="text" value={completion} readOnly />
      
      <div id="dicas-locais">
    <div className="interface">
      <h2 className="titulo">Dicas da 
      Wherever</h2>
      <h2 className="sub-titulo"> Separamos a dedo alguns dos locais mais diferentes e  interessantes pra você poder consultar em nosso site e conhecer mais sobre! Seja restaurantes, bares famosos, lugares diferentes ou mais comuns, sinta-se livre para visitar e conhecer suas histórias. </h2>
      
      <div className="flex">

        <div className="especialidades-box">
        <img class="imagens-box" src={Restauranterizz} alt="Imagem 5" className="img-fluid" />
          <h3> Rodizio de Risoto SP </h3>
          <p>Estamos falando do Rizz Restaurante, são 24 sabores de risotos, inclusive com 10 opções vegetarianas e cada mesa pode escolher 6 opções para comer à vontade! <br/>
            A partir de R$79,90 com entradinha de aranchini incluso. Horário de funcionamento é de terça a sexta das 18H30 as 23h30. <p><br/>⭐ Avaliações da Web 5/5<br/> 📍 Alameda Iraé, 398 - Moema.</p></p>
        </div>

        <div className="especialidades-box">
        <img class="imagens-box"src={Barzinho} alt="Imagem 4" className="img-fluid" />
          <h3> O bar mais descolado de São Paulo </h3>
          <p> O Venancio Restauante Bar, aqui você vai encontrar coquetéis autorais e gastronomia contemporânea. Alguns dos pratos e drinks. <br/>
            Bruschetta de Jamon R$ 49,90 e Brie empanado R$ 93,90 bebidas Gin Royale R$ 44,89 e Cha Mitter R$39,98. Horários de funcionamento é das 12h as 01h pode variar conforme o dia.</p> 
          <p>⭐ Avaliações da Web 4,3  <br/> 📍 Rua Serra de Japi, 789 - Tatuapé.</p>
        </div>

        <div className="especialidades-box">
        <img class="imagens-box" src={Boliche} alt="Imagem 3" className="img-fluid" />
          <h3> Esse é o Villa Bowling</h3>
          <p>O lugar é ideal para você ir com a galera e curtir um happy hour , inspirado nos boliches de Las Vegas, com ambiente amplo e pistas profissionais o lugar é simplesmente sensacional.</p>
          <p> Por lá você encontra comida boa com o restaurante Johnny Rockets, que tem os maiores clássico burgers com sabor dos anos 80. Horário de funcionamento é de Domingo á Quinta das 11h ás 00h Sexta e Sábado e das 11h ás 01h. </p> <p><br/> ⭐ Avaliações da Web 4,2 <br/> 📍3 unidades em SP. Shopping Vila Olímpia, Shopping West Plaza e Shopping Center Norte.</p>
        </div>

      </div>
    </div>
  </div>

      {/* Seção "Quem nós somos" */}
      <section id="quemsomos-section">
        <h1 className="quemsomos-title">Quem nós somos?</h1>
        <p className="quemsomos">Nós somos um grupo de estudantes da Universidade São Judas Tadeu, na Mooca. Desenvolvemos este site como parte de uma atividade curricular, mas nosso objetivo é fazer algo realmente útil para o dia a dia das pessoas. Queremos facilitar a descoberta de lugares incríveis ao redor, colocando nossas habilidades em prática para tornar isso possível.</p>
      </section>
    </section>
    
  );
}

export default Main;