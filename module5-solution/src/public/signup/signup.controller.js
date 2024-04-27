(function() {
    'use strict';
    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['user'];
    function SignupController(user) {
        var $ctrl = this;
        $ctrl.user = user;
        if(user) {
            $ctrl.menuItem = user.menuItem;
        }
    }
})();