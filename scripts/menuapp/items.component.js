(function () {
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'scripts/menuapp/templates/items.template.html',
      bindings: {
        items: '<'
      }
    });

})();
