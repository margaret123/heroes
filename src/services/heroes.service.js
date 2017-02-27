import angular from 'angular';

import heroesManager from '../../utils/api';

class Heroes {
    constructor($q) {
        this.$q = $q;
        this.heroesManager = heroesManager;
    }
    getHeroes() {
        return this.$q((resolve, reject) => {
            this.heroesManager.fetch(function (err, data) {
                if (data) {
                    data = data.filter(function (item) {
                        item.age = Number(item.age) ? Number(item.age) : 'unknown';
                        return item;
                    });
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    }
}
Heroes.$inject = ['$q'];
export default angular.module('services.heroes', [])
    .service('heroesService', Heroes)
    .name;