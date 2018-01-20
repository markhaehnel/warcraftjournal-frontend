FROM node:9-alpine

ARG CI_COMMIT_SHA
ARG API_URL=https://api.warcraftjournal.org

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV API_URL=$API_URL
ENV CI_COMMIT_SHA=$CI_COMMIT_SHA

# Create app directory
WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn run build

EXPOSE 3000
CMD [ "yarn", "start" ]
