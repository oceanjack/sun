FROM nginx:alpine
EXPOSE 80/tcp
WORKDIR /usr/share/nginx/html
COPY build /usr/share/nginx/html
