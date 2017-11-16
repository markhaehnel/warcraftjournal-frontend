FROM node:8-alpine

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV API_URL=https://api.staging.warcraftjournal.org

# Create app directory
WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn run build

EXPOSE 3000
CMD [ "yarn", "start" ]
