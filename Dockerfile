FROM node:18

#RUN mkdir -p /app
WORKDIR /app/test

COPY package*.json ./ 

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]