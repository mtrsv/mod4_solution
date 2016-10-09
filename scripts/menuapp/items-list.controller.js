(function() {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsListController', ItemsListController);

  ItemsListController.$inject = ['items'];
  function ItemsListController(items) {
    var ctrl = this;
    ctrl.items = items.menu_items;
  }

})();
