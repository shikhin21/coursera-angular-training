(function(){
  'use strict'
  angular.module("NarrowItDownApp", [])
  .controller("NarrowDownController", NarrowDownController)
  .service("MenuSearchService", MenuSearchService)
  .directive("foundItems", foundItems);

  NarrowDownController.$inject = ["MenuSearchService"];
  function NarrowDownController(menuService){
    var ndc = this;
    ndc.searchTerm = "";
    ndc.found = [];
    ndc.message = "";
    ndc.narrowItDownForMe = function(){
        if(ndc.searchTerm !== ""){
        menuService.getMatchedMenuItems(ndc.searchTerm)
        .then(function(foundItems){
          ndc.found = foundItems;
        })
        .catch(function(response){
          ndc.found = [];
        });
      }else{
        ndc.found = [];
      }
    };
    ndc.remove = function(index){
      ndc.found.splice(index, 1);
    };
  };

  MenuSearchService.$inject = ["$http", "$q"];
  function MenuSearchService($http, $q){
    this.getMatchedMenuItems = function(searchTerm){
      var deferred = $q.defer();
      $http({
        method:"GET",
        url:"https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(
        function success(response){
         var foundItems = [];
         var searchTermUpper = searchTerm.toUpperCase();
         angular.forEach(response.data.menu_items, function(item){
           if(item.name.toUpperCase().indexOf(searchTermUpper)!= -1){
             foundItems.push(item);
           };
         });
          deferred.resolve(foundItems);
        },
        function error(response){
          deferred.reject(response);
        }
      )
      return deferred.promise;
    };
  };

  function foundItems(){
    var ddo = {
      scope:{
        items:"<foundItemsArr",
        remove: "&onRemove"
      },
      templateUrl:"templates/foundItems.template.html"
    };
    return ddo;
  };

function FoundItemsController(){}

})();
