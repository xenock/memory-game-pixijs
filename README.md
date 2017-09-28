
# Pixi-es6

Bootstraping a Pixi.js project with ES6 features and a complete developpment setup.


## Features

Create or edit the scripts in the "/src/" directory. Entry point that will be your project is "/src/index.js". You can use ES6 features like import and stuff.

Other features:
- ESLint warnings and errors with Babel and recommended javascript configuration
- Watch and build automatically when script is saved
- Notifications on warnings and errors
- BrowserSync
- Express server that opens automatically on http://localhost:3000/ on launch
- An example to test the PIXI.js library ans ES6 features

In current state, using the Pixi.js 4.5.6 library, but easy to change and add another version in the "/build/pixi.*/" directory. 

The server is using the "/build/" directory as root directory.


## Installation

After cloning the prject:

```
npm install
```

To start the server in Developpment mode:
```
npm start
```

To build the production ready javascript:
```
npm run build
```
