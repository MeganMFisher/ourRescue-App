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

      $scope.productData = {};

      $scope.addToCart = function() {

        // console.log($scope.productData.size, $scope.productData.quantity)
        // console.log(`Going to service with ${$scope.detail.name}`)
        BlankService.addToCart($scope.productData.size, $scope.productData.quantity, $scope.detail).then(function(response) {
          BlankService.getCart().then(function(response) {
            $scope.cart = response.data;
            console.log($scope.cart)

          })
        })
      }

}])
   
.controller('shoppingCartCtrl', ['$scope', '$stateParams', 'BlankService',
    function ($scope, $stateParams, BlankService) {

      function getCart(){
        BlankService.getCart().then(function(response) {
          console.log(response);
          $scope.cart = response.data;
        })

      }
      // getCart();

      


}])
 
.controller('abolitionistsCtrl', ['$scope', '$stateParams', 'BlankService',
    function ($scope, $stateParams, BlankService) {

      BlankService.getAbolitionists().then(function(resp) {
        $scope.abolitionists = resp.data;
      });

    }])