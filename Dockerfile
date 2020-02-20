FROM node:8.1.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD index.js ./
ADD package.json ./
RUN npm install
CMD ["npm", "start"]
