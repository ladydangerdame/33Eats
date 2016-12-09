angular
  .module('pokemon')
  .controller('PokemonsIndexController', PokemonsIndexController);

PokemonsIndexController.$inject = ['$http'];

function PokemonsIndexController ($http) {
  var vm = this;
  vm.newPokemon = {};

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(function successCallback(response) {
    vm.pokemons = response.data;
    // console.log(vm.pokemons.pokemon)
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  }); //end of get

  vm.createPokemon = function () {
    console.log(vm.newPokemon)
    $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/pokemon',
      data: vm.newPokemon,
    }).then(function successCallback(response) {
      vm.pokemons.pokemon.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  } //end of create

  vm.editPokemon = function (pokemon) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id,
      data: pokemon
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  } //end of edit

  vm.deletePokemon = function (pokemon) {
  $http({
    method: 'DELETE',
    url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id,
  }).then(function successCallback(json) {
    var index = vm.pokemons.pokemon.indexOf(pokemon);
    vm.pokemons.pokemon.splice(index,1)
    console.log(pokemon.name, 'deleted')
  }, function errorCallback(response) {
    console.log('There was an error deleting the data', response);
  });
}  //end of delete


} //end of PokemonsIndexController
