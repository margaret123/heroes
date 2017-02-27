export default class HomeController {
    constructor(heroesService) {
        this.heroes = [];
        this.heroesService = heroesService;
        this.reverse = false;
        this.propertyName = '';
        this.heroesLimit = 0;

        this.loadHeroes();
    }

    loadHeroes() {
        this.heroesService.getHeroes().then((data) => {
            this.heroes = data.filter(function (item) {
                item.isFavorite = localStorage.getItem(item.name) ? true : false;
                return item;
            });
        }, (err) => {
            this.errorMessage = err ? 'Something went wrong. Please refresh the page.' : null;
        });
    }

    loadMore(step) {
        if (this.heroesLimit <= this.heroes.length) {
            this.heroesLimit += step;
        }
    }
}

HomeController.$inject = ['heroesService'];
