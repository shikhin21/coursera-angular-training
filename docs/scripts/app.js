(function(){
  'use strict'
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', toBuyController)
  .controller('AlreadyBoughtController', alreadyBoughtController)
  .service('ShoppingListCheckOffService', shoppingListCheckOffService);

  toBuyController.$inject = ['ShoppingListCheckOffService'];
  function toBuyController(shoppingListCheckOffService){
    this.tbArr = shoppingListCheckOffService.getToBuyArr();
    this.status = shoppingListCheckOffService.getToBuyListStatus();
    this.removeItem = function(idx){
      shoppingListCheckOffService.removeToBuyItem(idx);
    };
  };

  alreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function alreadyBoughtController(shoppingListCheckOffService){
    this.abArr = shoppingListCheckOffService.getAlreadyBoughtArr();
    this.status = shoppingListCheckOffService.getAlreadyBoughtListStatus();
  };

  function shoppingListCheckOffService(){
    this.tbArr = [
      {name: "cookie(s)", quantity: 10},
      {name: "Banana(s)", quantity: 12},
      {name: "Celery Stick(s)", quantity: 10},
      {name: "Sweet Potato(s)", quantity: 2},
      {name: "Chicken(s)", quantity: 1}];

    this.abArr = [];

    this.tbStatus = {'empty':false};
    this.abStatus = {'empty':true};

    this.getToBuyArr = function(){
      return this.tbArr;
    };
    this.addToBuyItem = function(item){
      this.tbArr.push(item);
    };
    this.removeToBuyItem = function(idx){
      var removed = this.tbArr.splice(idx, 1);
      this.tbStatus.empty = this.tbArr.length == 0;
      this.addAlreadyBoughtItem(removed[0]);
      return removed;
    };
    this.getToBuyListStatus = function(){
      return this.tbStatus;
    };
    this.getAlreadyBoughtArr = function(){
      return this.abArr;
    };
    this.addAlreadyBoughtItem = function(item){
      this.abArr.push(item);
      this.abStatus.empty = this.abArr.length == 0;
    };
    this.removeAlreadyBoughtItem = function(idx){
      return this.abArr.splice(idx, 1);
    };
    this.getAlreadyBoughtListStatus = function(){
      return this.abStatus;
    };
  };
})();
