FROM node:14-slim as builder

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

ARG BASE_URL

ENV REACT_APP_BASE_URL=${BASE_URL}

RUN npm run build
