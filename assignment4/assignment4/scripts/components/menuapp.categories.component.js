(function(){
  angular.module("MenuApp")
  .component("menuAppCategories",{
    templateUrl: "/templates/categories.html",
    bindings:{
      categoriesList:"<cats"
    }
  });
})();
