(function () {
"use strict";

angular.module('public')
.component('signUp', {
  templateUrl: 'src/public/signup/signup.html',
  controller: SignUpController,
  controllerAs:'ctrl'
});


SignUpController.$inject = ['UserService','MenuService'];
function SignUpController(userService, menuService) {
  var ctrl = this;
  ctrl.go = function(){
    menuService.getMenuItem(this.user.favItem)
    .then(
      function(data){
        if(data){
          ctrl.user.favItemName = data.name;
          ctrl.user.favItemDesc = data.description;
          ctrl.user.favItemImagUrl = data.favItemImagUrl;
        }
        userService.storeUser(ctrl.user);
      })
    .then(
      function(){
        ctrl.favMessage ="";
        ctrl.message = "Your information has been saved.";
      })
    .catch(
      function(){
        ctrl.favMessage = "This item does not exist.";
        ctrl.message = "";
      });
  }
}

})();
