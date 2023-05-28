FROM node:16

# Create app working directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# bundle app source
COPY script.js .

# port and .js file of the app
EXPOSE 3000
CMD [ "node", "script.js" ]



