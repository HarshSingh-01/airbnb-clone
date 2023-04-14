FROM node:latest
WORKDIR /home/airbnb
COPY . .
RUN npm install --force