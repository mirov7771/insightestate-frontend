# build environment
FROM node:20.17.0 AS builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN yarn install
COPY . /usr/src/app
RUN yarn run build


# production environment

FROM nginx:1.23.0-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]
