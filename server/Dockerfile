FROM node:12-alpine

# Create app dir and use it as the working dir
RUN mkdir -p /srv/server
WORKDIR /srv/server

COPY package.json /srv/server

RUN npm install

COPY . /srv/server
