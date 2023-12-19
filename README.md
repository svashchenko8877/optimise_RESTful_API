## Install, Build, Run

Install node package dependencies:

`$ npm install`

Build:

`$ npm run build`

Run ExpressJS server:

`$ npm start`


## Detailed report outlining the changes: 

1. Separated the server, routes, database configuration, and models into different files. (Decomposition)
2. Used a library express-validator to validate incoming requests.
3. Implemented a middleware for error handling.
4. Database Layer separated as well as connection strings
