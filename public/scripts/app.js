console.log("Sanity Check: JS is working!");

angular
  .module('pokemon', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/pokemons.html',
      controllerAs: 'pokemonCtrl',
      controller: 'PokemonsIndexController'
    })
    .when('/pokemons/:id', {
      templateUrl: '/views/templates/one-pokemon.html',
      controllerAs: 'onePokemonCtrl',
      controller: 'OnePokemonController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
