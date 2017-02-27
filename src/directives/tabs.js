import angular from 'angular';

function tabs() {
    return {
        restrict: 'E',
        template: '<div class="row"><div class="col-xs-12"><ul class="tabs"><li ng-class="{active: !isShown}"><a ng-click="showFavorites(undefined)">All</a></li><li ng-class="{active: isShown}"><a ng-click="showFavorites(true)">Favorite</a></li></ul></div></div>',
        link: function (scope) {
            scope.showFavorites = function (show) {
                scope.isShown = show ? true : undefined;
            }
        }
    }
}

export default angular.module('directives.tabs', [])
    .directive('tabs', tabs)
    .name;