// =============================================================================
//
// JurisMercatus - Market definition database with semantic search
//
// Copyright (C) 2025 Shriyan Yamali
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
// Contact: yamalishriyan@gmail.com
//
// =============================================================================

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