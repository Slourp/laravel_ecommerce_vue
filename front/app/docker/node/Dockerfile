# Base stage
# ---------------------------------------
FROM node:16-alpine AS base

WORKDIR /node

# Development stage
# ---------------------------------------
FROM base AS development

ENV SERVER_PORT=3000
ENV PATH /node/node_modules/.bin:$PATH
EXPOSE $SERVER_PORT 9229

COPY package*.json ./

RUN NODE_ENV=development && yarn install --frozen-lockfile

WORKDIR /node/app

CMD ["yarn", "dev"]

# Source stage
# ---------------------------------------
FROM base AS source

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /node
COPY package*.json ./

RUN NODE_ENV=development && yarn install --frozen-lockfile

COPY . .

# Test stage
# ---------------------------------------
FROM source AS test

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV PATH /node/node_modules/.bin:$PATH

COPY --from=development /node/node_modules /node/node_modules

RUN \
  npm run test && \
  npm run lint

# Production stage
# ---------------------------------------
FROM source AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PATH /node/node_modules/.bin:$PATH
ENV SERVER_PORT=3000

EXPOSE $SERVER_PORT

CMD [ "node", "./bin/www" ]
