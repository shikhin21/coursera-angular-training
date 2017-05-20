(function () {
"use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject=['userInfo'];
  function MyInfoController(info){
    if(!info){
      this.showSignUp = true;
    }
    this.info = info;
  }

})();
