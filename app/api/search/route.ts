// app/api/search/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q") || "";

  console.log("🔍 Received query:", q);

  if (!q) {
    return NextResponse.json({ error: "Missing q" }, { status: 400 });
  }

  // 1) get embedding
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
  const embedRes = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: q,
  });
  const vector = embedRes.data[0].embedding;
  console.log("📐 Embedding vector length:", vector.length);

  // 2) fire off Pinecone query
  const pc = new Pinecone();   // v6 reads your PINECONE_API_KEY & PINECONE_BASE_URL automatically
  const index = pc.Index(process.env.PINECONE_INDEX!);
  const queryRes = await index.query({
    vector,
    topK: 20,
    includeMetadata: true,
  });
  console.log("🎯 Matches returned:", queryRes.matches.length);

  return NextResponse.json({ matches: queryRes.matches });
}
