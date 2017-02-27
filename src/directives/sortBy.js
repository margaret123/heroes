import angular from 'angular';
import template from './templates/sortBy.html'

function sortBy() {
    return {
        restrict: 'E',
        template: template,
        link: function (scope) {
            scope.sortBy = function (propertyName) {
                scope.reverse = (scope.propertyName === propertyName) ? !scope.reverse : false;
                scope.propertyName = propertyName;
            }
        }
    }
}

export default angular.module('directives.sortBy', [])
    .directive('sortBy', sortBy)
    .name;