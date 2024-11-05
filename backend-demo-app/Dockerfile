FROM openjdk:17-alpine
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY target/backend-demo-app.jar /app/backend-demo-app.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "backend-demo-app.jar"]