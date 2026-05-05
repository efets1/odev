# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage (Nginx)
FROM nginx:alpine
# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
