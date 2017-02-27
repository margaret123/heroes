import heroes from './heroes.service'

describe('Service: Heroes', function () {
    var heroesService, scope;
    var list = [{
        name: 'Wolverine',
        origin: 'Earth',
        age: '107',
        superpowers: ['immortal'],
        weaknesses: ['temper'],
        image: 'hero_1.png'
    }, {
        name: 'Captain America',
        origin: 'Earth',
        age: '97',
        superpowers: ['impenetrable shield', 'superhuman strength'],
        weaknesses: ['missed out on the 60s'],
        image: 'hero_2.png'
    }, {
        name: 'Hulk',
        origin: 'Earth',
        age: '36',
        superpowers: ['superhuman strength'],
        weaknesses: ['green', 'not very bright in hulk-mode'],
        image: 'hero_3.png'
    }];
    beforeEach(angular.mock.module(heroes));
    beforeEach(angular.mock.inject(function(_heroesService_, _$q_, _$rootScope_) {
        var $q = _$q_;
        scope = _$rootScope_.$new();
        heroesService = _heroesService_;
        heroesService = {
            getHeroes: function(){
                var deferred = $q.defer();
                var result = list;
                deferred.promise.data = result;
                deferred.resolve(result);
                return deferred.promise;

            }
        }
    }));

    it('test fetching heroes array', function () {
        var data;
        var promise = heroesService.getHeroes();
        promise.then(function(result){
            data = result;
        });
        scope.$root.$digest();
        expect(data).toEqual(list);
    })
});