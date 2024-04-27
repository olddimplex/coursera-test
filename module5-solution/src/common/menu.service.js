(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$q', '$http', 'ApiPath'];
function MenuService($q, $http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItem = function (shortName) {
    try {
      var category = shortName.trim().match(/^[^\d\s]*/) + '';
      var menuItem = shortName.trim().match(/\d*$/) - 1;
      return $http.get(ApiPath + '/menu_items/' + category + '/menu_items/' + menuItem + '.json').then(function (response) {
        response.data.meta = {
          category: category, 
          menuItem: menuItem
        }
        return response.data;
      });
    } catch(err) {
      var deferred = $q.defer();
      deferred.reject(err);
      return deferred.promise;
    }
  };

}

})();
