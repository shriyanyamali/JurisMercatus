![License](https://img.shields.io/badge/License-MIT-green.svg)
![Maintained](https://img.shields.io/badge/Maintained-yes-green.svg)
![Build Status](https://img.shields.io/github/actions/workflow/status/shriyanyamali/shriyanyamali.github.io/ci.yml?branch=main)
![Last Commit](https://img.shields.io/github/last-commit/shriyanyamali/Verdictr)
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

# Verdictr

![Verdictr Hero](public\verdictr-hero.png)

## Purpose

Verdictr is a market definition database aggregated from the European Commission's merger and antitrust case decisions. It brings all the definitions together on one page and uses natural language searches, so your query doesn't need to exactly match the wording in the decisions.

## Development Process

1. Scrape Cases
2. Extract Sections
3. Extract Individual Market Definitions
4. Embed and Index
5. Search
6. Return Matches

Learn about the full development process [here](https://verdictr.vercel.app/how-it-works).

## Features

- 4000+ market definitions
- 600 unique cases
- Natural Language Search

## Live Demo

Try it out in your browser (no sign‑up needed):  
[verdictr.vercel.app](https://verdictr.vercel.app)

## Installation


## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Manual Installation

1. Clone the repository

   ```bash
   git clone https://github.com/shriyanyamali/Verdictr.git
   ```

2. Change into the project directory

   ```bash
   cd Verdictr
   ```

3. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start local development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

5. If you are hosting with Vercel, set these as your environment variables or create a `.env` file. The variables should be structured as follows:

   ```bash
   PINECONE_API_KEY=pcsk...
   PINECONE_BASE_URL=https://<your-pinecone-index>.svc.<your-pinecone-env>.pinecone.io
   PINECONE_ENV= e.g us-east-1-aws
   PINECONE_INDEX= eg. verdictr
   OPENAI_API_KEY=sk...
   ```
   See `.env.example` for an example environment.

   > Note: You will have to provide and embed your own market definitions in Pinecone. If you want to use the Verdictr database, you can access it [here](https://verdictr.vercel.app/database.json).

## Docker Installation

1. Built the image
   ```bash
   docker build -t verdictr .
   ```

2. Run the container

   ```bash
   docker run -d -p 3000:3000 \
   -e PINECONE_API_KEY=pcsk... \
   -e PINECONE_BASE_URL=https://<your-pinecone-index>.svc.<your-pinecone-env>.pinecone.io \
   -e PINECONE_ENV=us-east-1-aws \
   -e PINECONE_INDEX=verdictr \
   -e OPENAI_API_KEY=sk... \
   verdictr
   ```
   See `.env.example` for an example environment.

## How to Use

1. Visit the Semantic Search page.
2. Filter by policy area, year, or search.
3. Enter your query.
4. Return the top 20 results based on the search criteria.

## Constituent repositories

 - [market-def-scraper](https://github.com/shriyanyamali/market-def-scraper): Extracts relevant market definitions from European Commission competition case decision PDFs.

 - [pinecone-def-search](https://github.com/shriyanyamali/pinecone-def-search): Code to embed text records and create a Pinecone vector index, allowing the semantic search of market definitions.

## Terms & Conditions

By accessing or using Verdictr, you agree to the following:

1. Use of Service  
   Verdictr is provided for informational purposes only. Verdictr and the Services are provided on an "AS IS" basis for your personal, non-commercial use or internal academic/research purposes only. You agree not to use the Services in any way that is unlawful, or harms us or any other user.

2. Branding & Design Assets  
   All branding materials, including but not limited to logos, images, illustrations, color palettes, UI elements, and the name Verdictr, are protected assets owned by Verdictr. Use of these materials for any purpose, including derivative works, is strictly prohibited without explicit authorization.

3. Prohibited Commercial Use  
   You may not use any part of the Verdictr Services, including data, designs, or content, in any commercial product, service, research, report, or application without our express written consent. This includes, but is not limited to, selling access to Verdictr data, incorporating our data into for-profit software, or offering commercial analysis based on our data.

4. Open Source License

   Portions of the Verdictr project, including its source code, are made available under the terms of the open-source MIT License. This license allows reuse, modification, and distribution of the code for any purpose, including commercial use, provided that proper attribution is given.

   Failure to include proper attribution when using Verdictr’s code may be considered a violation of the license terms.

   View the full terms of service here: [verdictr.vercel.app/terms](https://verdictr.vercel.app/terms)

## License

The code in this repository is licensed under the MIT License, adhering to the restrictions set in the Terms of Service.

View the full license here: [verdictr.vercel.app/license](https://verdictr.vercel.app/license)

## Contact

Email: [yamalishriyan@gmail.com](mailto:yamalishriyan@gmail.com)

Copyright © 2025 Shriyan Yamali. All rights reserved.
