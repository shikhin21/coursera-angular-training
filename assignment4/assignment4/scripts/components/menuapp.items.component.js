(function(){
  angular.module("MenuApp")
  .component("menuAppItems", {
    templateUrl: "templates/items.html",
    bindings:{
      items:"<",
      categoryName:"@"
    }
  });
})();
