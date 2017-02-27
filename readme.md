## Development
This is an [Angular](https://angularjs.org/) module, which is bundled by [Webpack](https://webpack.js.org/). The source code makes use of ECMAScript 6 features
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
The heroes.js minified file will be available in the dist folder in the root folder of project.
