FROM node:12-alpine

# Create app dir and use it as the working dir
RUN mkdir -p /srv/app/ays-chat-client
WORKDIR /srv/app/ays-chat-client

COPY .npmrc /srv/app/ays-chat-client/.npmrc

COPY package.json /srv/app/ays-chat-client
COPY package.json /srv/app/ays-chat-client

RUN npm install

RUN rm -f /srv/app/ays-chat-client/.npmrc

COPY . /srv/app/ays-chat-client

CMD ["npm","start"]