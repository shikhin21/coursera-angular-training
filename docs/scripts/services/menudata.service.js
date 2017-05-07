(function(){
  angular.module("data")
  .service("MenuDataService", MenuDataService);

  MenuDataService.$inject = ["$http", "serviceBasePath"];
  function MenuDataService($http, serviceBasePath){
    this.getAllCategories = function(){
      return $http(
        {
          url : serviceBasePath + 'categories.json'
        }
      );
    };
    this.getItemsForCategory = function(categoryShortName){
      return $http(
        {
          url : serviceBasePath + 'menu_items.json',
          params : {"category": categoryShortName}
        }
      );
    };
  }
})();
