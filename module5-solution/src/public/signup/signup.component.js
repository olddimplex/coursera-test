(function () {
    "use strict";
    
    angular.module('public')
    .component('signupForm', {
      templateUrl: 'src/public/signup/signup-form.html',
      controller: 'SignupFormController',
      controllerAs: 'reg',
      bindings: {
        user: '=',
        readonly: '<'
      }
    });
    
    })();