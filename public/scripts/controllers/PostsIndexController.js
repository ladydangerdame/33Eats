angular
  .module('33eats')
  .controller('PostsIndexController', PostsIndexController);

PostsIndexController.$inject = ['$http'];

function PostsIndexController ($http) {
  var vm = this;
  vm.newPost = {};

  $http({
    method: 'GET',
    url: 'http://localhost:3000/api/posts'
  }).then(function successCallback(response) {
    vm.posts = response.data;
     console.log(vm.posts)
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  }); //end of get

  vm.createPost = function () {
    $http({
      method: 'POST',
      url: 'http://localhost:3000/api/posts',
      data: vm.newPost,
    }).then(function successCallback(response) {
      vm.posts.push(response.data);
      console.log(vm.newPost)
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  } //end of create
  //
  // vm.editPokemon = function (pokemon) {
  //   $http({
  //     method: 'PUT',
  //     url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id,
  //     data: pokemon
  //   }).then(function successCallback(json) {
  //     // don't need to do anything!
  //   }, function errorCallback(response) {
  //     console.log('There was an error editing the data', response);
  //   });
  // } //end of edit

//   vm.deletePokemon = function (pokemon) {
//   $http({
//     method: 'DELETE',
//     url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id,
//   }).then(function successCallback(json) {
//     var index = vm.pokemons.pokemon.indexOf(pokemon);
//     vm.pokemons.pokemon.splice(index,1)
//     console.log(pokemon.name, 'deleted')
//   }, function errorCallback(response) {
//     console.log('There was an error deleting the data', response);
//   });
// }  //end of delete


} //end of PostsIndexController
