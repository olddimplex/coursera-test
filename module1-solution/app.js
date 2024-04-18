(function() {
    'use strict';
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope']
    function LunchCheckController($scope) {
        $scope.list = '';
        $scope.advise = '';
        $scope.checkIfTooMuch = function() {
            var items = $scope.list.split(',');
            if(items < 1) {
                $scope.advise = 'Please enter data first';
            } else
            if(items < 4) {
                $scope.advise = 'Enjoy!';
            } else {
                $scope.advise = 'Too much!';
            }
        };
    }
})();