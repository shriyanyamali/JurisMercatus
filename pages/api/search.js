import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method Not Allowed");
  }

  const { q, limit = 20 } = req.query;
  console.log("🔍 Received query:", q);

  if (!q) {
    return res.status(400).json({ error: "Missing q" });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const embedRes = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: q,
  });
  const vector = embedRes.data[0].embedding;
  console.log("📐 Embedding vector length:", vector.length);

  const pc = new Pinecone();
  const index = pc.Index(process.env.PINECONE_INDEX);
  const queryRes = await index.query({
    vector,
    topK: parseInt(limit, 10),
    includeMetadata: true,
  });
  console.log("🎯 Matches returned:", queryRes.matches.length);

  return res.status(200).json({ matches: queryRes.matches });
}