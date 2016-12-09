angular
  .module('pokemon')
  .controller('OnePokemonController', OnePokemonController);

OnePokemonController.$inject = ['$http', '$routeParams'];

function OnePokemonController ($http, $routeParams) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon/'+ $routeParams.id
  }).then(function successCallback(json) {
    vm.pokemon = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
