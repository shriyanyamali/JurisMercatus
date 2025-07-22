FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json* yarn.lock* ./
RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
