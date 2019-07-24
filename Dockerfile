FROM ubuntu
WORKDIR /opt/backend
USER root
RUN apt update
RUN apt install -y curl netcat
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential
WORKDIR /opt/backend/TeamAPoolProjectBackend
COPY . .
RUN npm install 
RUN npm build
ENV MONGO_HOST=database
EXPOSE 8080
COPY entrypoint.sh .
ENTRYPOINT ["./entrypoint.sh"]
