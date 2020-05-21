FROM node:12-slim

WORKDIR /src/

COPY ./package*.json  /src/

RUN npm install --silent

COPY ./  /src/

RUN npm run build 

EXPOSE 80

CMD [ "node", "./dist/server.js" ]