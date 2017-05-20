(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath', '$q'];
function MenuService($http, ApiPath, $q) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
    var deferred = $q.defer();
    if(shortName && shortName!==''){
      deferred.resolve(
        $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
          var data =  response.data;
          data.favItemImagUrl = ApiPath + '/images/' + shortName + '.jpg';
          return data;
        }));
    }
    else {
      deferred.resolve(null);
    }
    return deferred.promise;
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();
