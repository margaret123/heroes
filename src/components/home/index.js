import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

import heroesService from '../../services/heroes.service'

import requestError from '../../directives/requestError'
import tabs from '../../directives/tabs'
import favButton from '../../directives/favButton'
import sortBy from '../../directives/sortBy'

export default angular.module('app.home', [uirouter, heroesService, requestError, tabs, favButton, sortBy])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;