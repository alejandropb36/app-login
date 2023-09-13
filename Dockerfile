FROM node:18-alpine as node

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

FROM nginx:alpine

COPY --from=node /app/dist/app-login /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
