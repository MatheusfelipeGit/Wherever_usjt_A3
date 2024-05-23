require('dotenv').config();
const axios = require('axios');
const { Configuration, OpenAIApi } = require('openai');


// Função para obter geolocalização usando Google Maps Geolocation API
async function getGeolocation() {
    const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GOOGLE_API_KEY}`;
    const payload = {
        considerIp: true
    };

    try {
        const response = await axios.post(url, payload);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter geolocalização:', error);
        return null;
    }
}

// Função para interagir com ChatGPT
async function askChatGPT(question) {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: question,
            max_tokens: 150
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Erro ao interagir com ChatGPT:', error);
        return null;
    }
}

// Função principal
async function main() {
    // Obter geolocalização
    const location = await getGeolocation();

    if (location) {
        const latitude = location.location.lat;
        const longitude = location.location.lng;

        // Preparar pergunta para ChatGPT
        const question = `Minha localização atual é latitude ${latitude} e longitude ${longitude}. O que você pode me dizer sobre este lugar?`;

        // Perguntar ao ChatGPT
        const response = await askChatGPT(question);
        console.log('Resposta do ChatGPT:', response);
    } else {
        console.log('Não foi possível obter a localização.');
    }
}

// Executar a função principal
main();