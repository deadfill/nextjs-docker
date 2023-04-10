FROM node:latest

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY 2xdzakaxxl6ovuv
ENV PM2_SECRET_KEY 9um9sbv4kyfypbz


# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install --production

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]

