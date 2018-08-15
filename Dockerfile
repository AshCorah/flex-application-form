FROM node:8

WORKDIR /usr/src/app

# install dependencies
RUN mkdir ./client 
COPY package.json ./package.json
COPY ./client/package.json ./client/
RUN cd ./client && npm install 

RUN npm install

# copy dirs
COPY ./util ./util
COPY ./routes ./routes
COPY ./services ./services
COPY ./app.js ./app.js
COPY ./client/src ./client/src
COPY ./client/public ./client/public

RUN npm run build

ENTRYPOINT ["node", "app"]

EXPOSE 1200