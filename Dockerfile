# Use a minimal Alpine Linux root filesystem
FROM alpine:3.21

# Install nginx (smallest possible web server setup)
RUN apk --no-cache add nginx

# Copy static website files to nginx's default serving directory
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
