FROM node:20-bullseye-slim

WORKDIR /workspace/backend

# 依存関係のインストール
COPY --chown=user:node package.json pnpm-lock.yaml ./

RUN mkdir -p /workspace/backend/node_modules && chown -R node:node /workspace
RUN npm install -g pnpm

USER node
RUN pnpm install

