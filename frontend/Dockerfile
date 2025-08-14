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
COPY ./nginx/lotsof.properties/lotsof.properties.ca.crt /etc/nginx/lotsof.properties/lotsof.properties.ca.crt
COPY ./nginx/lotsof.properties/lotsof.properties.crt /etc/nginx/lotsof.properties/lotsof.properties.crt
COPY ./nginx/lotsof.properties/lotsof.properties.key /etc/nginx/lotsof.properties/lotsof.properties.key
COPY ./nginx/myselection.properties/myselection.properties.ca.crt /etc/nginx/myselection.properties/myselection.properties.ca.crt
COPY ./nginx/myselection.properties/myselection.properties.crt /etc/nginx/myselection.properties/myselection.properties.crt
COPY ./nginx/myselection.properties/myselection.properties.key /etc/nginx/myselection.properties/myselection.properties.key
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]
