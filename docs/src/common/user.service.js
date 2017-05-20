(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$q'];
function UserService($q) {
  var service = this;

  service.storeUser = function (user) {
    var deferred = $q.defer();
    this.user = user;
    deferred.resolve();
    return deferred.promise;
  };

  service.getUserInfo = function () {
    var deferred = $q.defer();
    deferred.resolve(this.user);
    return deferred.promise;
  };
}



})();
