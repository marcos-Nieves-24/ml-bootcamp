FROM node:20-alpine AS base

# Development stage
FROM base AS development
WORKDIR /app

# Install dependencies
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy application source
COPY . .

# Global node_modules not needed for alpine
RUN rm -rf node_modules/.bin

# Build application
RUN npm run build

# Development command
CMD ["npm", "run", "dev"]

# Production stage
FROM base AS production
WORKDIR /app

RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

COPY . .
RUN npm run build

EXPOSE 3000

# Non-root user for security
RUN addgroup --system --gid 1001 nodegroup && adduser --system --uid 1001 appuser -G nodegroup
USER appuser

CMD ["npm", "start"]