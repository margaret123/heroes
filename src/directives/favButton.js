import angular from 'angular';
import '../css/favButton.css';

function favButton() {
    return {
        restrict: 'E',
        scope: {
            hero: '='
        },
        template: '<a ng-click="updateFavorites(hero)" ng-class="{\'text-danger\': hero.isFavorite}" class="glyphicon glyphicon-heart text-muted"></a>',
        link: function (scope) {
            scope.updateFavorites = function (hero) {
                if (hero.isFavorite) {
                    localStorage.removeItem(hero.name);
                    hero.isFavorite = false;
                }
                else {
                    localStorage.setItem(hero.name, '1');
                    hero.isFavorite = true;
                }
            }
        }
    }
}

export default angular.module('directives.favButton', [])
    .directive('favButton', favButton)
    .name;