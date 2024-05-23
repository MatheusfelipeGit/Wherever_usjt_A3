// import React from "react";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css'; //import do bootstrap
// import '../styles.css'; //import do css

// // function MainR() {
// //   return (
// //     <main className="container">
// //       {/* Renderiza o lado esquerdo da página */}
// //       {/* <LeftSide /> */}
// //       {/* Renderiza o lado direito da página */}
// //       <RightSide />
// //     </main>
// //   );
// // }
// function Right() {
//   const enviar = async () => {
//     try {
//       const pergunta = document.getElementById("prompt").value;
//       const response = await axios.post('http://localhost:4000/pergunte-ao-chatgpt', { prompt: pergunta });
//       document.getElementById("completion").value = response.data.completion;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//       document.getElementById("location").innerHTML = "Geolocalização não é suportada por este navegador.";
//     }
//   };

//   const showPosition = (position) => {
//     const coords = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
//     document.getElementById("coords").innerHTML = coords;
//   };

//   const showError = (error) => {
//     switch(error.code) {
//       case error.PERMISSION_DENIED:
//         document.getElementById("location").innerHTML = "Usuário negou a solicitação de Geolocalização."
//         break;
//       case error.POSITION_UNAVAILABLE:
//         document.getElementById("location").innerHTML = "As informações de localização não estão disponíveis."
//         break;
//       case error.TIMEOUT:
//         document.getElementById("location").innerHTML = "A solicitação para obter a localização do usuário expirou."
//         break;
//       case error.UNKNOWN_ERROR:
//         document.getElementById("location").innerHTML = "Ocorreu um erro desconhecido."
//         break;
//     }
//   };

//   return (
    
//     <div className="right-side">
//       <label className="respostas">Digite a pergunta: <input type="text" id="prompt" /></label>
//       <button onClick={enviar}>Perguntar</button>
//       <input type="text" id="completion" />

//       <h1>Minha localização atual</h1>
//       <button onClick={getLocation}>Obter Localização</button>
//       <p id="location">Localização: <span id="coords"></span></p>

//       <aside id="about-us-section">
//         <h1>Como a Wherever pode te ajudar?</h1>
//         <p className="paragrafo">
//           Com Wherever, você descobre lugares incríveis com apenas um toque. Seja bares aconchegantes, restaurantes requintados, baladas vibrantes ou rooftops com vistas deslumbrantes, tudo está ao seu alcance. Defina seu raio de busca e deixe-nos revelar os tesouros escondidos ao seu redor!
//         </p>
//       </aside>

//       <article className="quemsomos-section">
//         <h1 className="quemsomos-title">Quem nós somos?</h1>
//         <p className="quemsomos">Nós somos um grupo de estudantes da Universidade São Judas Tadeu, na Mooca. Desenvolvemos este site como parte de uma atividade curricular, mas nosso objetivo é fazer algo realmente útil para o dia a dia das pessoas. Queremos facilitar a descoberta de lugares incríveis ao redor, colocando nossas habilidades em prática para tornar isso possível.
//         </p>
//       </article>

//       <div className="atalhos">
//         <button onClick={() => window.location.href = '#about-us-section'}>Sobre Nós</button>
//         <button onClick={() => window.location.href = '#what-is-wherever-section'}>O que é o Wherever?</button>
//       </div>
//     </div>
    
//   );
// }

// export default Right;
