FROM node:9-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9999
CMD [ "node","index.js" ]