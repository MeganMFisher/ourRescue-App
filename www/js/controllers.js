angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', 'BlankService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, BlankService) {

}])
   
.controller('donateCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('page3Ctrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
 
}])
   
.controller('menuCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('shopCtrl', ['$scope', '$stateParams', 'BlankService', 
function ($scope, $stateParams, BlankService) {

      BlankService.getAllProducts().then(function(resp) {
        $scope.products = resp.data;
      });


}])
   
.controller('socialMediaCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('ProductInfoCtrl', ['$scope', '$stateParams', 'BlankService', 
function ($scope, $stateParams, BlankService) {

      BlankService.getOneProduct($stateParams.id).then(function(resp){
        $scope.detail = resp.data[0];
      })


}])
   
.controller('shoppingCartCtrl', ['$scope', '$stateParams', '$auth', 
    function ($scope, $stateParams, BlankService, $auth) {

    // mainService.getData().then(response => {
    //   $scope.items = response.data;
    // })
    // $scope.addToCart = item => {
    //   mainService.addToCart(item.id, $scope.user.id).then(response => {
    //     $scope.cart = response;
    //   })
    // }
    // $scope.checkOut = () => {
    //   mainService.checkOut($scope.user.id).then(response => {
    //     $scope.checkout = response;
    //   })
    // }

}])
 
.controller('abolitionistsCtrl', ['$scope', '$stateParams', 'BlankService',
    function ($scope, $stateParams, BlankService) {

      BlankService.getAbolitionists().then(function(resp) {
        $scope.abolitionists = resp.data;
      });

    }])