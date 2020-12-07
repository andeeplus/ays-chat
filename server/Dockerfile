FROM node:12-alpine

# Create app dir and use it as the working dir
RUN mkdir -p /srv/app/ays-chat-server
WORKDIR /srv/app/ays-chat-server

COPY package.json /srv/app/ays-chat-server

RUN npm install

COPY . /srv/app/ays-chat-server

CMD ["npm","start"]