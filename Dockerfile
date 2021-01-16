FROM node:latest

RUN mkdir -p /home/node/app/blog/client/dist 
RUN mkdir /home/node/app/blog/server
RUN chown -R node:node /home/node/app

WORKDIR /home/node/app/blog/server

COPY ./client/dist/ ../client/dist/
COPY ./server/ ./

RUN npm install

EXPOSE 8080

CMD ["node", "server.js"]