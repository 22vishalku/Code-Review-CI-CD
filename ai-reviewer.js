
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Securely load from environment
});

const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{"role": "user", "content": "write a haiku about AI"}],
});

console.log(completion.choices[0].message);

