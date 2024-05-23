require('dotenv').config();
const OPENAI_API_KEY = ""
const { OpenAI } = require('openai');
const openai = new OpenAI(OPENAI_API_KEY);
const {run } = require('./gemini')

//importando o express
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.post('/pergunte-ao-chatgpt', async(req, res) => {
    const { prompt } = req.body;
    const role = "user";
    const model = 'gpt-3.5-turbo';
    const max_tokens = 50;
    const completion= await openai.chat.completions.create({
        messages: [{ role: role, contant: prompt }],
        model: model,
        max_tokens: max_tokens
    });
    res.json({ completion: completion.choices[0].message.content})
});

app.post('/gemini/questions', async (req, res) => {
    try {
        const { prompt } = req.body;
        const result = await run(prompt);
        res.json({ text: result });
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
})

app.listen(4000, () => console.log("ChatGPT_Backend em execução na porta 4000"));