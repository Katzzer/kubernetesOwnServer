FROM openjdk:17-alpine

WORKDIR /app

# Copy the JAR file built by Gradle
COPY build/libs/*.jar /app/backend-demo-app.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app/backend-demo-app.jar"]