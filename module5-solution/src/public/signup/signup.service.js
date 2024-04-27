(function() {
    'use strict';
    angular.module('public')
    .service('SignupService', SignupService);

    var registration;

    function SignupService() {
        var service = this;

        service.signup = function(reg) {
            registration = reg;
        };

        service.mydata = function() {
            return registration;
        };
    };
})();