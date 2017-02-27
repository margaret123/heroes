## Development
The library is a [Node.js](https://nodejs.org/en/) module itself. Distribution of this module is
bundled by [Webpack](https://webpack.js.org/). The source code makes use of ECMAScript 6 features
which is eventually safely transpiled into ECMAScript 5 (supported by all modern browsers) by 
[Babel](http://babeljs.io/). Package is managed by [Yarn](https://yarnpkg.com/) (enhanced wrapper
for NPM).

#### System requirements
To be able to develop the library you need to install:  

* [NPM](https://docs.npmjs.com/getting-started/installing-node)  

* [Yarn](https://yarnpkg.com/en/docs/install)


#### Install dependency
To begin development of the library all the dependencies need to be installed first:

```
yarn install
```

#### Start development
```
yarn start
```
This will start development server and automatically open development sandbox page in default browser. 
If you need to have sandbox page in any other browser just use [http://localhost:8888/](http://localhost:8888/) URL. 
Development server watches changes in the source code and automatically updates sandbox page with the new version of library.

#### Test source code
```
yarn test
```
The HTML version of test coverage report will be available in the build folder in the root
folder of project.

#### Build distribution
```
yarn build
```
The heroes.js distribution file will be available in the dist folder in the root folder of project.







<h5 align="center">
	<img src="logo.png" alt="Heroes Manager">
</h5>

# Heroes Manager

Web Team Exercise

### What is this about

The purpose of this test is to understand your ability to create a modern and functional single page application.

Below you'll find the features, the requirements and the key points you should use while developing.

### What we'll evaluate

- You are free to use any JavaScript library or framework.
- IE8 support is **NOT** required. You should develop the application only taking into consideration IE9+ browsers.
- The use of ES6 features is allowed (but you should use a transpiler to produce ES5 valid JavaScript).
- The use of CSS processors (Sass, LESS, etc.) is allowed and encouraged.

### Bonus points

- Code quality
- Mobile support
- Application structure
- Unit testing
- User Interface
- Optimization (load times and rendering performance)
- Use web components

### The task

As a user I would like to have access to an *Heroes Manager* where I can search items given the following criteria:

1. Hero name
2. Hero origin
3. Hero age
4. Superpowers
5. Weaknesses
6. Image

Each item should have these fields and a picture.

#### Heroes API

To simulate an API, we have created a module in the [api file](utils/api.js). We expect you to be able to use this sort of file in your project.

Upon using this simulated API, you will notice a few things:

1. Sometimes the API returns an error;
2. It takes the API 800ms per request.

We expect you to handle these situations gracefully.

#### Heroes list

As a user, I want to see a maximum of 5 heroes on the page, with a paging solution of your choice: regular paging, infinite scrolling, etc.

#### Sort heroes

As a user, I want to be able to sort the heroes by name, origin, and age.

#### Search heroes

As a user, I want to be able to filter the heroes database by way of a simple search.

#### Favourites list

As a user, I'd like to be able to create a favourite heroes list.

#### Delete from favourites

As a user, I want to be able to search my favourite heroes list, and being able to remove heroes from that list.

### Delivery requirements

- Share your project as a link to a repository, or send us a ZIP-file containing the source.
- Email to [webz@icemobile.com](mailto:webz@icemobile.com)
- We should be able to get the project up and running per your instructions.
- On top of that, it's appreciated (not mandatory) if you can host the project yourself and send us a link.

# Have fun!
