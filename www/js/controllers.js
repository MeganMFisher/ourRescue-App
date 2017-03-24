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

  .controller('donateCtrl', ['$scope', '$stateParams', 'stripe', '$http', '$state',
    function ($scope, $stateParams, stripe, $http, $state) {

      // $('#donateYellowBox').waypoint(function () {
      //       $('#donateYellowBox').addClass('fadeInLeft');
      //   }, {
      //       offset: '60%'
      //   });

  // -------------------------------------------
  // -                 Stripe                  -
  // -------------------------------------------
  $scope.payment = {};
  $scope.price = {};

  $scope.charge = function (payment) {

    return stripe.card.createToken($scope.payment.card)
    .then(function (response) {
      console.log('token created for card ending in ', response.card.last4);
      console.log($scope.payment)

      var payment = angular.copy($scope.payment); 
      console.log(payment)
      // console.log($scope.payment)
      // payment.card = void 0;
      console.log(payment.card)
      payment.token = response.id;

      return $http({
        method: 'POST',
        url: 'https://ourrescueapp.herokuapp.com/api/payment',
        data: {
          amount: $scope.price,
          payment: payment
        }
      })
    })
    .then(function(payment) {
      console.log('successfully submitted payment for $', payment);
      $state.go('donateThanks');
    })
    .catch(function (err) {
       if (err.type && /^Stripe/.test(err.type)) {
         console.log('Stripe error: ', err.message);
         alert(err.message)
       }
       else {
         console.log('Other error occurred, possibly with your API', err);
         alert(err.message)
       }
     });
  };


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
          if (item.id === $scope.detail.id && item.size === $scope.productData.size) {
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

  .controller('shoppingCartCtrl', ['$scope', '$stateParams', 'BlankService','$state', '$rootScope',
    function ($scope, $stateParams, BlankService, $state, $rootScope) {
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


      $scope.changeState = function() {
        $state.go('checkout', {}, {reload: 'checkout'})
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


  .controller('checkoutCtrl', ['$scope', '$stateParams', 'BlankService', '$rootScope', 'stripe', '$http', '$state',
    function ($scope, $stateParams, BlankService, $rootScope, stripe, $http, $state) {
      
      $rootScope.cart = [];

      function getCart() {
        return BlankService.getCart().then(function (cartFromServer) {
          $rootScope.cart = cartFromServer;
              $scope.total = function () {
                    if($rootScope.cart.length > 0){
                    var total = 0;
                    for (var i = 0; i < $rootScope.cart.length; i++) {
                      var item = $rootScope.cart[i];
                      total += (item.price * item.quantity);
                      
                    }
                    $scope.totalPrice = {};
                    $scope.totalPrice.price = total;
                    console.log($scope.totalPrice)
                    } else {
                      $scope.totalPrice = 0;
                    }
                  }
                  $scope.total()
        })

      }
      getCart();



      $scope.addressData = {};

      $scope.addToAddressDatabase = function(){
        BlankService.addToAddressDatabase($scope.addressData.firstName, $scope.addressData.lastName, $scope.addressData.emailAddress,
        $scope.addressData.address,
        $scope.addressData.city,
        $scope.addressData.state,
        $scope.addressData.zipcode).then(function(){
          
        })
      }

  // -------------------------------------------
  // -                 Stripe                  -
  // -------------------------------------------

  $scope.payment = {};
  $scope.price = {};

  $scope.charge = function (payment) {

    return stripe.card.createToken($scope.payment.card)
    .then(function (response) {
      console.log('token created for card ending in ', response.card.last4);
      console.log($scope.payment)

      var payment = angular.copy($scope.payment);
    
      console.log(payment)
      // console.log($scope.payment)
      // payment.card = void 0;
      console.log(payment.card)
      payment.token = response.id;

      var adjustedTotal = $scope.totalPrice.price * 100;

      return $http({
        method: 'POST',
        url: 'https://ourrescueapp.herokuapp.com/api/payment',
        data: {
          amount: adjustedTotal,
          payment: payment
        }
      })
    })
    .then(function(payment) {
      console.log('successfully submitted payment for $', payment);
      $state.go('congrats');
    })
    .catch(function (err) {
       if (err.type && /^Stripe/.test(err.type)) {
         console.log('Stripe error: ', err.message);
         alert(err.message)
       }
       else {
         console.log('Other error occurred, possibly with your API', err);
         alert(err.message)
       }
     });
  };


    }
  ])