(function() {
    'use strict';
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope']
    function LunchCheckController($scope) {
        $scope.list = '';
        $scope.advise = '';
        $scope.checkIfTooMuch = function() {
            var items = $scope.list.split(',').filter(function(e) { return e != null && e.trim().length > 0; });
            if(items.length < 1) {
                $scope.advise = 'Please enter data first';
            } else
            if(items.length < 4) {
                $scope.advise = 'Enjoy!';
            } else {
                $scope.advise = 'Too much!';
            }
        };
    }
})();