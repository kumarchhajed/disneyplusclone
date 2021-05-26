FROM node:10 AS builder
WORKDIR '/app'

COPY . .
RUN npm build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
