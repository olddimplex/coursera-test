(function() {
    'use strict';
    angular.module('public')
    
    .directive('restaurantMenuitem', MenuItemDirective);

    MenuItemDirective.$inject = ['MenuService'];
    function MenuItemDirective(MenuService) {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$asyncValidators.restaurantMenuitem = function(modelValue, viewValue) {
                    return MenuService.getMenuItem(modelValue);
                }
            }
        };
    };
})();