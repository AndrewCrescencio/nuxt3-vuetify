FROM node:20-alpine AS build-stage

WORKDIR /app
RUN npm install -g pnpm

COPY . .

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

RUN pnpm generate

FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/.output/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
