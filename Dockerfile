FROM node:22.8.0
WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm@9.12.2 && pnpm install
COPY . .

EXPOSE 3000

CMD [ "pnpm", "start" ]
