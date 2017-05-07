(function(){
  angular.module("MenuApp")
  .controller("MenuAppCategoriesController", MenuAppCategoriesController);

  MenuAppCategoriesController.$inject = ["$rootScope","response"];
  function MenuAppCategoriesController($rootScope, response){
    this.categories = response.data;
  }
})();
