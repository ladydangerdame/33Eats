console.log("Sanity Check: JS is working!");

angular
  .module('33eats', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/posts.html',
      controllerAs: 'postCtrl',
      controller: 'PostsIndexController'
    })
    .when('/posts/:id', {
      templateUrl: '/views/templates/one-post.html',
      controllerAs: 'onePostCtrl',
      controller: 'OnePostController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
