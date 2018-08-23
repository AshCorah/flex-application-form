# Flex Application Form
This is a project that provides a solution to the Flex Application Form. 

## Dependencies
1. Docker!

## Build and Run Instructions
1. `npm install`              - installs dependencies for the server
2. `docker-compose build`     - builds the docker container
3. `docker-compose up`        - this will run the client and server (this is proxy'd to allow 3000 to talk to 1200 (server))

## Commands
1. `npm run dev:client`       - runs the development client on port 3000
2. `npm run dev:server`       - runs the server on port 1200

## Testing
1. `npm run test:app`         - Run tests on the app
2. `npm run test:client`      - Run tests on the client
3. `npm run test`             - Run tests on the app and client

