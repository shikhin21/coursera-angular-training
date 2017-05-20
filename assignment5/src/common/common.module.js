(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://shikhin21-coursera-angular-jhu.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
