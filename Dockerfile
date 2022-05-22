FROM node:16.15.0-alpine3.14

WORKDIR /usr/src/app

CMD ["npm", "install"]

COPY package*.json ./

RUN yarn

RUN yarn add global nodemon

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
