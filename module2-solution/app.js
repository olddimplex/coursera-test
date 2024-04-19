(function() {
    'use strict';
    angular.module('ShoppingListCheckOff', [])

    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)

    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();

        toBuy.buy = function(index) {
            ShoppingListCheckOffService.buy(index);
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBoughtList();
    };

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyList = [{
            name: 'Banana(s)',
            quantity: 6
        },{
            name: 'Apple(s)',
            quantity: 2
        },{
            name: 'Orange(s)',
            quantity: 4
        },{
            name: 'Kiwi(s)',
            quantity: 8
        },{
            name: 'Pear(s)',
            quantity: 1
        }];

        var alreadyBoughtList = [];

        service.getToBuyList = function() {
            return toBuyList;
        };

        service.getAlreadyBoughtList = function() {
            return alreadyBoughtList;
        };

        service.buy = function(index) {
            try {
                alreadyBoughtList.push(
                    toBuyList.splice(index, 1)[0]);
            } catch(error) {
                console.log(error);
            }
        };
    };
})();