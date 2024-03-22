# Base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

WORKDIR /app

EXPOSE 8080

CMD pnpm preview
