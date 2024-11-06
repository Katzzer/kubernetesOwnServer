# Use Node.js runtime as the base image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

# Globally install 'serve' to serve the built files
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Serve the built files using 'serve'
CMD [ "serve", "-s", "dist" ]
