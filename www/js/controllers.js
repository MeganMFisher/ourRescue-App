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
   
.controller('ProductInfoCtrl', ['$scope', '$stateParams', 'BlankService', '$rootScope',
function ($scope, $stateParams, BlankService, $rootScope) {


      BlankService.getOneProduct($stateParams.id).then(function(resp){
        $scope.detail = resp.data[0];
      })

       function getCart(){
        BlankService.getCart().then(function(response) {
          $rootScope.cart = response.data.cart;
          console.log($rootScope.cart)
          BlankService.cart = response.data.cart;
         
        })

      }
      

      $scope.productData = {};

      $scope.addToCart = function() {
       
        // var currentCart = BlankService.getCart();
        console.log(BlankService.getCart)
        BlankService.addToCart($scope.productData.size, $scope.productData.quantity, $scope.detail).then(function(response) {
          BlankService.getCart().then(function(response) {
            $rootScope.cart = response.data;
            console.log($rootScope.cart)
              getCart();

          })
        })
      }

}])
   
.controller('shoppingCartCtrl', ['$scope', '$stateParams', 'BlankService', '$rootScope',
    function ($scope, $stateParams, BlankService, $rootScope) {

    
      function getCart(){
        BlankService.getCart().then(function(response) {
          $rootScope.cart = response.data.cart;
          console.log($rootScope.cart)
          BlankService.cart = response.data.cart;
         
        })

      }
      getCart();
      

      $scope.total = function(){
        var total = 0;
        for(var i = 0; i < BlankService.cart.length; i++){
            var item = BlankService.cart[i];
            total += (item.price * item.quantity);
        }
        return total;
      }



      $scope.removeFromCart = function(product){
       BlankService.removeFromCart(product).then(function(response){
         console.log(response);
         getCart();
       })

      }
      


}])
 
.controller('abolitionistsCtrl', ['$scope', '$stateParams', 'BlankService',
    function ($scope, $stateParams, BlankService) {

      BlankService.getAbolitionists().then(function(resp) {
        $scope.abolitionists = resp.data;
      });

    }])