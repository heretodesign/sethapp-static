FROM node:14-slim as builder

WORKDIR /usr/src/app

COPY ./package*.json ./

COPY ./yarn.lock ./

RUN yarn install

COPY . .

ARG BASE_URL

ENV REACT_APP_BASE_URL=${BASE_URL}

RUN yarn run build
