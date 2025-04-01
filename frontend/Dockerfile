# build environment
FROM node:20.17.0 AS builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN yarn install
COPY . /usr/src/app
RUN yarn run build


# production environment

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/ca.crt /etc/nginx/ca.crt
COPY ./nginx/insightestate.pro.crt /etc/nginx/insightestate.pro.crt
COPY ./nginx/insightestate.pro.key /etc/nginx/insightestate.pro.key
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]
