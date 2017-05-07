(function(){
  angular.module("MenuApp")
  .config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider","$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url:"/",
        templateUrl:"templates/home.html"
      })
      .state("categories", {
        url:"/categories",
        template:"<menu-app-categories cats='macc.categories'></menu-app-categories>",
        resolve:{
          response:["MenuDataService", function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        },
        controller: "MenuAppCategoriesController as macc"
      })
      .state("items",{
        url:"/items/{code}",
        template:"<menu-app-items items='maic.items' category-name='{{maic.categoryName}}'></menu-app-items>",
        resolve:{
          response:["MenuDataService", "$stateParams", function(MenuDataService, $stateParams){
            return MenuDataService.getItemsForCategory($stateParams.code);
          }]
        },
        controller:"MenuAppItemsController as maic"
      })
  };
})();
