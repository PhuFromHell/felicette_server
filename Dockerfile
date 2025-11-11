# Production Dockerfile for felicette_server
# Uses a small Node LTS alpine image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install only production dependencies
COPY package.json package-lock.json* ./
RUN npm install --production --silent

# Copy application code
COPY . .

# Use the PORT env variable set by Cloud Run (default 8080)
ENV PORT=8080

EXPOSE 8080

# Run the app
CMD ["node", "server.js"]
