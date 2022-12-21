FROM node:18-alpine

WORKDIR /app/test

COPY package*.json ./ 

RUN npm ci && npm cache clean --force

COPY . .

EXPOSE 5000

CMD ["npm", "test"]