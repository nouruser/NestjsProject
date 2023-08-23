
FROM node:14
WORKDIR /usr/src/devices
COPY package*.json yarn.lock ./

RUN yarn install
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]
