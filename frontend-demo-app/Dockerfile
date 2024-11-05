# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Globally install 'serve' to serve the built files
RUN npm install -g serve

# Copy the rest of the application code into the container
COPY . .

# Build the application
RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Serve the built files with 'serve'
CMD [ "serve", "-s", "dist" ]