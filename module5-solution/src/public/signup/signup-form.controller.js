(function() {
    'use strict';
    angular.module('public')
    .controller('SignupFormController', SignupFormController);

    SignupFormController.$inject = ['MenuService', 'SignupService'];
    function SignupFormController(MenuService, SignupService) {
        var $ctrl = this;

        $ctrl.signup = function(userDetails) {
            MenuService.getMenuItem(userDetails.favorite).then(function(data) {
                if (data != null) {
                    $ctrl.menuItem = data;
                    userDetails.menuItem = data;
                    SignupService.signup(userDetails);
                }
            }).catch(console.log);
        };
    }
})();