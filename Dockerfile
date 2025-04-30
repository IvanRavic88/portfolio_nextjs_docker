# 1. Build Stage
FROM node:20.10.0 AS builder

# Set working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build the Next.js application
RUN npm run build

# 2. Production Stage
FROM node:20.10.0-slim AS runner

# Set working directory in the container
WORKDIR /app

# Copy only the build artifacts from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/src ./src

# Install production dependencies
RUN npm install --production

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
