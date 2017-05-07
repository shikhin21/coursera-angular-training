(function(){
  angular.module("MenuApp")
  .controller("MenuAppItemsController", MenuAppItemsController);

  MenuAppItemsController.$inject = ["$rootScope","response"];
  function MenuAppItemsController($rootScope, response){
    this.items = response.data.menu_items;
    this.categoryName = response.data.category.name
  }
})();
