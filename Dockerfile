# Base image
FROM node:18-alpine

# Install Git
RUN apk update && \
    apk add --no-cache git

# Set the working directory
WORKDIR /app

COPY package.json yarn.lock .

RUN yarn install

RUN yarn build

WORKDIR /app

EXPOSE 8080

CMD pnpm preview
