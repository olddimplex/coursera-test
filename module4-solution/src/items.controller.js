(function() {
    'use strict';
    angular.module('MenuApp')
    
    .controller('CategoryItemsController', CategoryItemsController);

    CategoryItemsController.$inject = ['cat'];
    function CategoryItemsController(cat) {
        var $ctrl = this;
        $ctrl.category = cat.category;
        $ctrl.list = cat.menu_items;
    };
})();