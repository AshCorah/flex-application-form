# Flex Application Form
This is a project that provides a solution to the Flex Application Form. 

## Dependencies
1. Docker!

## Build and Run Instructions
1. `npm install`              - installs dependencies for the server
2. `cd client && npm install` - installs dependencies for the client
2. `docker-compose build`     - builds the docker container
3. `docker-compose up`        - this will run the client and server (this is proxy'd to allow 3000 to talk to 1200 (server))
4. `npm run dev:client`       - this will run the client on localhost:3000

