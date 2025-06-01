# Stage 1: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
# Consider adding --frozen-lockfile or --ci for more deterministic builds
RUN npm ci

# Copy source code and configuration files
COPY public ./public
COPY src ./src
COPY tailwind.config.js postcss.config.js ./

# If you have other root config files (babel.config.js, craco.config.js, etc.), copy them too
# COPY babel.config.js ./

RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine

# Remove default Nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
