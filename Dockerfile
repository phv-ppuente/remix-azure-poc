FROM node:18-alpine

EXPOSE 3000

WORKDIR /app

ARG SHOPIFY_API_KEY
ARG SHOPIFY_API_SECRET
ARG SHOPIFY_APP_URL

ENV NODE_ENV=production
ENV SHOPIFY_API_KEY=$SHOPIFY_API_KEY
ENV SHOPIFY_API_SECRET=$SHOPIFY_API_SECRET
ENV SHOPIFY_APP_URL

COPY package.json package-lock.json* ./

RUN npm ci --omit=dev && npm cache clean --force
# Remove CLI packages since we don't need them in production by default.
# Remove this line if you want to run CLI commands in your container.
RUN npm remove @shopify/cli

COPY . .

RUN npm run build

CMD ["npm", "run", "docker-start"]
