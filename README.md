![License](https://img.shields.io/badge/License-AGPL%203.0-green.svg)
![Maintained](https://img.shields.io/badge/Maintained-yes-green.svg)
![Build Status](https://img.shields.io/github/actions/workflow/status/shriyanyamali/shriyanyamali.github.io/ci.yml?branch=main)
![Last Commit](https://img.shields.io/github/last-commit/shriyanyamali/JurisMercatus)

![JurisMercatus Hero](https://jurismercatus.vercel.app/jurismercatus-hero.png)

## Purpose

JurisMercatus is a market definition database aggregated from the European Commission's merger and antitrust case decisions. It brings all the definitions together on one page and uses natural language searches, so your query doesn't need to exactly match the wording in the decisions.

## Features

- 4000+ market definitions
- 600 unique cases
- Natural Language Search

## Live Demo

Try it out in your browser (no sign‑up needed):  
[jurismercatus.vercel.app](https://jurismercatus.vercel.app)

## Development Process

1. Scrape Cases
2. Extract Sections
3. Extract Individual Market Definitions
4. Embed and Index
5. Search
6. Return Matches

Learn more at [jurismercatus.vercel.app/how-it-works](https://jurismercatus.vercel.app/how-it-works).

## Infrastructure

<table>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Next.js-000000.svg?style=flat-square&logo=next.js&logoColor=white" alt="Next.js"/>
      <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
      <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
    </td>
  </tr>
  <tr>
    <td><strong>Data Analysis</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Gemini-4285F4.svg?style=flat-square&logo=google&logoColor=white" alt="Google Gemini"/>
      <img src="https://img.shields.io/badge/Python-3670A0.svg?style=flat-square&logo=python&logoColor=ffdd54" alt="Python"/>
      <img src="https://img.shields.io/badge/Pandas-150458.svg?style=flat-square&logo=pandas&logoColor=white" alt="Pandas"/>
    </td>

  </tr>
  <tr>
    <td><strong>Services</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Pinecone-000000.svg?style=flat-square&logo=pinecone&logoColor=white" alt="Pinecone"/>
      <img src="https://img.shields.io/badge/OpenAI-000000.svg?style=flat-square&logo=openai&logoColor=white" alt="OpenAI"/>
      <img src="https://img.shields.io/badge/Vercel-000000.svg?style=flat-square&logo=vercel&logoColor=white" alt="Vercel"/>
    </td>

  </tr>
</table>

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Manual Installation

1. Clone the repository

   ```bash
   git clone https://github.com/shriyanyamali/JurisMercatus.git
   ```

2. Change into the project directory

   ```bash
   cd JurisMercatus
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
   PINECONE_INDEX= eg. jurismercatus
   OPENAI_API_KEY=sk...
   ```

   See [`.env.example`](/.env.example) for an example environment.

   > Note: You will have to provide and embed your own market definitions in Pinecone. If you want to use the JurisMercatus database, you can access it [here](https://jurismercatus.vercel.app/database.json).

### Docker Installation

1. Built the image

   ```bash
   docker build -t jurismercatus .
   ```

2. Run the container

   ```bash
   docker run -d -p 3000:3000 \
   -e PINECONE_API_KEY=pcsk... \
   -e PINECONE_BASE_URL=https://<your-pinecone-index>.svc.<your-pinecone-env>.pinecone.io \
   -e PINECONE_ENV=us-east-1-aws \
   -e PINECONE_INDEX=jurismercatus \
   -e OPENAI_API_KEY=sk... \
   jurismercatus
   ```

   See [`.env.example`](/.env.example) for an example environment.

## How to Use

1. Visit the Semantic Search page.
2. Filter by policy area, year, or search.
3. Enter your query.
4. Return the top 20 results based on the search criteria.

## Constituent Repositories

- [market-def-scraper](https://github.com/shriyanyamali/market-def-scraper): Extracts relevant market definitions from European Commission competition case decision PDFs.

- [pinecone-def-search](https://github.com/shriyanyamali/pinecone-def-search): Code to embed text records and create a Pinecone vector index, allowing the semantic search of market definitions.

## Contributing

Contributions are welcome. Please read the [contribution guidelines](CONTRIBUTING.md) first.

## Terms & Conditions

JurisMercatus is available free of charge for everyone. However, if you use anything that is property of JurisMercatus or derived from this repositories or its constituent repositories, including but not limited to its code, images, color schemes, data, concept, and the name JurisMercatus, you must provide proper attribution. Failure to include proper attribution may be considered a violation of the license terms.

View the full Terms & Conditions at [jurismercatus.vercel.app/terms](https://jurismercatus.vercel.app/terms).

## License

The code in this repository is licensed under the AGPL-3.0 License.

View the full license at [www.gnu.org/licenses/agpl-3.0](https://www.gnu.org/licenses/agpl-3.0).

## Attribution

When using the code from this repo (i.e. shriyanyamali/JurisMercatus and jurismercatus.vercel.app) you must provide proper attribution.

Specifically, in any work, including but not limited to public, published, commercialized, or derived work that uses or builds upon this repository's code, you must cite the original repository by including the following citation:

```
This project uses digital assets from the JurisMercatus repository and jurismercatus.vercel.app Copyright (c) 2025 Shriyan Yamali,
licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).
```

Failure to include proper attribution when using JurisMercatus’s code may be considered a violation of the license terms.

## Contact

Email: [yamalishriyan@gmail.com](mailto:yamalishriyan@gmail.com)

Copyright © 2025 Shriyan Yamali. All rights reserved.
