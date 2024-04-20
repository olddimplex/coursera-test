(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
    
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('BaseUrl', 'https://coursera-jhu-default-rtdb.firebaseio.com');

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'found.html',
            scope: {
                found: '<',
                onRemove: '&'
            }
        };
    
        return ddo;
    }

    MenuSearchService.$inject = ['$http', 'BaseUrl'];
    function MenuSearchService($http, BaseUrl) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (BaseUrl + "/menu_items.json")
            }).then(function(result) {
                var payload = result.data;
                var foundItems = [];
                var menu;
                for(menu of Object.values(payload)) {
                    foundItems = foundItems.concat((menu.menu_items || []).filter(function(menuItem) { 
                        var descriptionMatches = menuItem && menuItem.description && menuItem.description.indexOf(searchTerm) >= 0;
                        if(descriptionMatches) {
                            menuItem.name = menuItem.name + ' (' + menu.category.name + ')';
                        }
                        return descriptionMatches
                    }));
                }
                return foundItems;
            }).catch(function (error) {
                console.log(error);
            });
        };
    };

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;

        narrowItDown.found = [];
        narrowItDown.searchTerm = '';

        narrowItDown.getMatchedMenuItems = function() {
            MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm).then(function(foundItems) {
                narrowItDown.found = foundItems;
            });
        };

        narrowItDown.removeMenuItem = function(index) {
            narrowItDown.found.splice(index, 1);
        };
    };
})();