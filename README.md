CORS Proxy Node/Express Server - run URLs through this server to avoid CORS errors

## Quickstart

```
yarn
yarn start
```

## TypeScript

```
# Main TypeScript executable
yarn global add ts-node

# Express and Jest Types
yarn add -D @types/express @types/jest

# Install missing typings
yarn global add typesync
typesync
yarn
```

https://www.npmjs.com/package/typesync

## Folder Structure

- [DEV.TO How to Structure REST APIs](https://dev.to/larswaechter/how-i-structure-my-rest-apis-11k4) 9/29/2022
- [CoreyCleary on API Layers](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way) 9/29/2022
  - Explanation of layers is good, but structure suggestion is bad

## Notes on Installed NPM Packages

```
yarn init

# Express is the API server to handle HTTP requests
yarn add express mysql2 date-fns sha.js dotenv

# Babel stuff (transpiles ES6 to CommonJS)
yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-react
yarn add -D babel-loader babel-plugin-module-resolver babel-preset-env babel-preset-stage-0

# Parse HTTP request incoming to the server
yarn add body-parser

# Auto-restart the running server when a file changes
yarn add nodemon

# Avoid CORS warnings in local dev
yarn add -D cors

yarn start
```

## References

### Babel with Node/Express to use ES6+

https://www.linkedin.com/learning/express-essential-training/initial-node-server-setup-with-express

```
# Babel transpiles ES6
yarn add --save-dev babel-cli babel-preset-env babel-preset-stage-0

# Add .babelrc file
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### NPM and Express

https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1

### Node and REST APIs

https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express

## TODO

Try this for absolute imports:

- https://stackoverflow.com/questions/63744943/absolute-path-in-the-tsconfig-doesnt-work
