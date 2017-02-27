import angular from 'angular';
import infiniteScroll from 'ng-infinite-scroll';
import uirouter from 'angular-ui-router';


import 'bootswatch/superhero/bootstrap.css';
import './css/main.css';

import routing from './app.config';
import home from './components/home';

angular.module('app', [uirouter, infiniteScroll, home])
    .config(routing);