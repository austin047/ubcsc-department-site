### Computer Science Website for the University of BUEA 

The Full website is build with the following technolologies....
* [Node.js](https://nodejs.org/en/)
* [Angular4 web starter](https://github.com/AngularClass/angular-starter)
* [MongoDB](https://www.mongodb.com)
* [Express](https://expressjs.com/)
* [Innograph](https://github.com/linnovate/innograph) (uses GraphQL for schema standartization)
* [Bit](https://bitsrc.io/) - (Manages js components, services and schemas)

## Prerequisite Technologies

* [Git](https://git-scm.com/downloads)
* [MongoDB](https://www.mongodb.org/downloads)
* [Node 6.x](https://nodejs.org/en/download/)
* npm 3.x ( or yarn)

> If you have an older version of Node.js and NPM, you can use Node Version Manager [NVM](https://github.com/creationix/nvm) to use multiple node versions on your system. This <sup>Project</sup> only supports Node 6.x or higher versions.

## Installation

To start your application, you need to clone the base repository from Github. This repository contains all the packages. Following the steps below will guide you to install all dependencies and get started with development.

```
git clone --depth 1 https://github.com/ 
cd cerver
npm install  
npm start  
```

If all the packages and modules installed successfully, your default web browser will open and you can see the default application at `http://localhost:3000`. This is the default port unless you change that manually.

## Testing
To test the application run the following commands....
Run test without watcher
```
npm test
```
Run test with watcher

```
npm test:watch
```

## Additional Tools used in this Project

* [Mongoose](http://mongoosejs.com/) - Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
* [Bootstrap](http://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.
* [Karma](https://karma-runner.github.io/1.0/index.html) - A simple tool that allows you to execute JavaScript code in multiple real browsers. Mainly on testing purposes.
* [Protractor](http://www.protractortest.org/#/) - Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would. 
* [Jasmine](https://jasmine.github.io/) - Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks
* [Istanbul](https://istanbul.js.org/) - Istanbul instruments your ES5 and ES2015+ JavaScript code with line counters, so that you can track how well your unit-tests exercise your codebase.
* [TypeScript](https://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
* [Webpack](https://webpack.js.org/) - webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into one or more bundles.