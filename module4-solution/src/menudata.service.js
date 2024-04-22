(function() {
    'use strict';
    angular.module('data')
    
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'BaseUrl'];
    function MenuDataService($http, BaseUrl) {
        var service = this;

        service.getAllCategories = function() {
            return $http({
                method: 'GET',
                url: BaseUrl + '/categories.json'
            }).then(function(result) {
                return result.data;
            }).catch(console.log);
        }

        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: 'GET',
                url: BaseUrl + '/menu_items/' + categoryShortName + '.json'
            }).then(function(result) {
                return result.data;
            }).catch(console.log);
        }
    };
})();