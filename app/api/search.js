import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

export default async function handler(req, res) {
  const { q, limit = 20 } = req.query;
  if (!q) return res.status(400).json({ error: "Missing q" });

  // 1) embed the query
  const emb = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const vec = await emb.embedQuery(q);

  // 2) init Pinecone client
  const pc = new PineconeClient();
  await pc.init({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENV,
  });
  const index = pc.Index(process.env.PINECONE_INDEX_NAME);

  // 3) query
  const { matches } = await index.query({
    vector: vec,
    topK: parseInt(limit, 10),
    includeMetadata: true,
  });

  res.status(200).json({ matches });
}