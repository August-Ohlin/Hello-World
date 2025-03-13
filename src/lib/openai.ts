import { config } from 'dotenv';
config(); // Ladda miljövariabler från .env-filen

import { OpenAI } from 'openai';

// Skapa en OpenAI-instans med API-nyckeln från miljövariabler
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default openai; 