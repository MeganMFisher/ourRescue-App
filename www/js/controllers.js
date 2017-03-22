angular.module('app.controllers', [])

  // *******************************************
  // *                homeCtrl                 *
  // *******************************************

  .controller('homeCtrl', ['$scope', '$stateParams', 'BlankService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, BlankService) {

    }
  ])

  // *******************************************
  // *               donateCtrl                *
  // *******************************************

  .controller('donateCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {


    }
  ])

  // *******************************************
  // *               page3Ctrl                 *
  // *******************************************

  .controller('page3Ctrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {

    }
  ])

  // *******************************************
  // *                menuCtrl                 *
  // *******************************************

  .controller('menuCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {


    }
  ])

  // *******************************************
  // *                shopCtrl                 *
  // *******************************************

  .controller('shopCtrl', ['$scope', '$stateParams', 'BlankService',
    function ($scope, $stateParams, BlankService) {

      BlankService.getAllProducts().then(function (resp) {
        $scope.products = resp.data;
      });


    }
  ])

  // *******************************************
  // *           socialMediaCtrl               *
  // *******************************************

  .controller('socialMediaCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {


    }
  ])

  // *******************************************
  // *            ProductInfoCtrl              *
  // *******************************************

  .controller('ProductInfoCtrl', ['$scope', '$stateParams', 'BlankService', '$rootScope',
    function ($scope, $stateParams, BlankService, $rootScope) {

      init();
      function init(){
       let token = localStorage.getItem('token'); 
        if(token && token != 'undefined'){
          console.log('we have token')
          getCart();

        } else {
          console.log('no token')
          createToken().then(function(cartFromServer){
            $rootScope.cart = cartFromServer;
          })
        }
      }
      function createToken(){
        return BlankService.createToken();
      }

      function getCart() {
        BlankService.getCart().then(function (cartFromServer) {
          $rootScope.cart = cartFromServer;
        })
      }

      BlankService.getOneProduct($stateParams.id).then(function (resp) {
        $scope.detail = resp.data[0];
      })


      function isDuplicate() {
        if ($rootScope.cart.length < 1) return false;
        for (let item of $rootScope.cart) {
          if (item.id === $scope.detail.id) {
            return true;
          }
        }
        return false;

      }
      $scope.productData = {};

      $scope.addToCart = function () {
        if ($rootScope.cart.length < 1) { 
          console.log('cart was empty')
          BlankService.addToCart($scope.productData.size, $scope.productData.quantity, $scope.detail).then(function (cartFromServer) {
              $rootScope.cart = cartFromServer;
          })
        } else if (isDuplicate()) {
          console.log('changing quantity')
          for (let item of $rootScope.cart) {
            if (item.id === $scope.detail.id) {
              item.quantity += 1;
              BlankService.updateCart($rootScope.cart).then(function(cartFromServer){
                $rootScope.cart = cartFromServer;
              })
              return
            }
          }
        } else {
          console.log('adding to cart')
          BlankService.addToCart($scope.productData.size, $scope.productData.quantity, $scope.detail).then(function (cartFromServer) {
              $rootScope.cart = cartFromServer;
          })


        }
      }

    }
  ]) //end of controller

  // *******************************************
  // *           shoppingCartCtrl              *
  // *******************************************

  .controller('shoppingCartCtrl', ['$scope', '$stateParams', 'BlankService', '$rootScope',
    function ($scope, $stateParams, BlankService, $rootScope) {
      // $rootScope.total;
      $rootScope.cart = [];

      init();
      function init() {
       let token = localStorage.getItem('token'); 
        if(token && token != 'undefined'){
          console.log('we have token')
          getCart()

        } else {
          console.log('no token')
          createToken().then(function(cartFromServer){
            $rootScope.cart = cartFromServer;
          })
        }
      }
      
      function createToken(){
        return BlankService.createToken();
      }

      function getCart() {
        return BlankService.getCart().then(function (cartFromServer) {
          $rootScope.cart = cartFromServer;
        })

      }


      $scope.total = function () {
        if($rootScope.cart.length > 0){
        var total = 0;
        for (var i = 0; i < $rootScope.cart.length; i++) {
          var item = $rootScope.cart[i];
          total += (item.price * item.quantity);
        }
        return total;
        } else {
          return '0'
        }
      }



      $scope.removeFromCart = function (product) {
        BlankService.removeFromCart(product).then(function (cartFromServer) {
          $rootScope.cart = cartFromServer;
        })

      }



    }
  ])

  //********************************************
  // *             abolitionistCtrl            *
  // *******************************************

  .controller('abolitionistsCtrl', ['$scope', '$stateParams', 'BlankService',
    function ($scope, $stateParams, BlankService) {

      BlankService.getAbolitionists().then(function (resp) {
        $scope.abolitionists = resp.data;
      });

    }
  ])

  // *******************************************
  // *             checkoutCtrl                *
  // *******************************************


  .controller('checkoutCtrl', ['$scope', '$stateParams', 'BlankService', '$stateParams', '$rootScope',
    function ($scope, $stateParams, BlankService, $stateParams, $rootScope) {
      
      $rootScope.cart = [];

      function getCart() {
        return BlankService.getCart().then(function (cartFromServer) {
          $rootScope.cart = cartFromServer;
        })

      }


      $scope.total = function () {
            if($rootScope.cart.length > 0){
            var total = 0;
            for (var i = 0; i < $rootScope.cart.length; i++) {
              var item = $rootScope.cart[i];
              total += (item.price * item.quantity);
            }
            return total;
            } else {
              return '0'
            }
          }


      $scope.addressData = {};

      $scope.addToAddressDatabase = function(){
        BlankService.addToAddressDatabase($scope.addressData.firstName, $scope.addressData.lastName, $scope.addressData.emailAddress,
        $scope.addressData.address,
        $scope.addressData.city,
        $scope.addressData.state,
        $scope.addressData.zipcode).then(function(response){
            console.log(response)
        })
      }

    }
  ])