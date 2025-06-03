import { NextRequest } from "next/server";
import { OpenAI } from "openai";
import { instructions } from "./consts";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { prompt } = body as { prompt: string };
  if (!prompt || typeof prompt !== "string") {
    return new Response(JSON.stringify({ error: "Missing or invalid prompt" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    const text = completion.choices[0].message?.content ?? "";
    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("OpenAI error:", error);
    return new Response(JSON.stringify({ error: "OpenAI request failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}