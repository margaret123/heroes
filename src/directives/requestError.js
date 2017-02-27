import angular from 'angular';

function requestError() {
    return {
        restrict: 'E',
        scope: {
            error: '='
        },
        template: '<div class="row ng-hide" ng-show="error"><div class="col-xs-12"><div class="alert alert-danger" role="alert">{{ error }}</div></div></div>'
    }
}

export default angular.module('directives.requestError', [])
    .directive('requestError', requestError)
    .name;