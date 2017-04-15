(function(){
  'use strict'
  angular.module("lunchModule", [])
  .controller("lunchController", lunchController);

  lunchController.$inject = ["$scope"];
  function lunchController($scope){
    $scope.quantityMessage = "";
    $scope.lunchItems = "";
    $scope.messageType = "blank";
    $scope.checkTooMuch = function(){
      var count = countItems($scope.lunchItems.split(','));
      var message = "";
      if(count == 0){
        $scope.messageType = "error";
        message = "Please enter data first.";
      }else if (count < 4 ) {
        $scope.messageType = "success";
        message = "Enjoy!";
      }else{
        $scope.messageType = "success";
        message = "Too much!";
      }
      $scope.quantityMessage = message;
    }
    function countItems(arr){
      var items = 0;
      arr.forEach(function(elem){
        if(elem.trim()!=""){
          items++;
        }
      });
      return items;
    }
  };
})();
