(function() {
    'use strict';
    angular.module('MenuApp')
    
    .component('categoryItemsList', {
        templateUrl: 'src/templates/items.template.html',
        bindings: {
            category: '<',
            list: '<'
        }
    });
})();