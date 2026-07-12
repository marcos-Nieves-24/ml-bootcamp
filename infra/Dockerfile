FROM node:20-alpine AS base
WORKDIR /app

# Copy only package files first to leverage Docker layer caching
COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.ts ./

# Development stage
FROM base AS development
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy the rest of the source
COPY . .
CMD ["npm", "run", "dev"]

# Production stage
FROM base AS production
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Copy the rest of the source
COPY . .
RUN npm run build

EXPOSE 3000

# Non-root user for security
RUN addgroup --system --gid 1001 nodegroup && adduser --system --uid 1001 appuser -G nodegroup
USER appuser

CMD ["npm", "start"]