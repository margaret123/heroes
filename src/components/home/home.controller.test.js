import home from './index';

describe('Controller: Home', function () {
    var $controller, heroesServiceMock, deferred, objectUnderTest, scope;

    beforeEach(angular.mock.module(home));

    beforeEach(angular.mock.inject(function($q, $rootScope, _$controller_) {
        scope = $rootScope.$new();
        function emptyPromise() {
            deferred = $q.defer();
            return deferred.promise;
        }
        heroesServiceMock = {
            getHeroes: emptyPromise
        };


        $controller = _$controller_;
    }));

    function makeController() {
        objectUnderTest = $controller('HomeController', {
            $scope: scope,
            heroesService: heroesServiceMock
        });
    }

    it('test heroesService.getHeroes to be called', function () {
        spyOn(heroesServiceMock, 'getHeroes').and.callThrough();
        makeController();

        scope.$root.$digest();

        expect(heroesServiceMock.getHeroes).toHaveBeenCalled();
    });
});
