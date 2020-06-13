FROM node:10-alpine

# Create app directory
ENV APP_PATH /panda
WORKDIR $APP_PATH

# Copy package*.json and lerna.json to /racer
COPY ./package*.json ./

RUN npm install

# Bundle app source
COPY ./ ./

EXPOSE 8080
CMD [ "npm", "run", "start" ]