(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'scripts/menuapp/templates/categories.template.html',
      bindings: {
        items: '<'
      }
    });
})();
