FROM node:18-alpine

WORKDIR /app/test

COPY package*.json ./ 

RUN npm ci

COPY . .

EXPOSE 5000

CMD ["npm", "test"]