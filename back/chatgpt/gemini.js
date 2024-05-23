const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function run(prompt) {
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  return text;
}

module.exports = { run };