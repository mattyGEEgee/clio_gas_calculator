FROM node:21-alpine3.17

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

# ENV PORT=5000
# would be accessable in nodejs with process.env.PORT

EXPOSE 5001

CMD [ "npm", "start" ]