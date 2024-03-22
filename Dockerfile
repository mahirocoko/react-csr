# Base image
FROM node:18-alpine

# Install Git
RUN apk update && \
    apk add --no-cache git

# Set the working directory
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN yarn install

#RUN npx lerna bootstrap

RUN yarn build

WORKDIR /app

EXPOSE 3000

# Start the server in production mode
ENV PORT 3000

CMD cd packages/user && yarn run server:prod
