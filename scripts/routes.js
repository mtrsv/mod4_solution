(function () {
  'use strict';

  angular.module('MenuApp')
    .config(config);

  config.$inject = ['$urlRouterProvider','$stateProvider'];
  function config($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'scripts/menuapp/templates/home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'scripts/menuapp/templates/main-categories.template.html',
        controller: 'CategoriesListController as catCtrl',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'scripts/menuapp/templates/main-items.template.html',
        controller: 'ItemsListController as itemsCtrl',
        resolve: {
          items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
