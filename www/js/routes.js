angular.module('app.routes', ['angular-stripe',])

.config(function($stateProvider, $urlRouterProvider, stripeProvider) {

  stripeProvider.setPublishableKey('pk_test_2ruzm2otavOn9xEgEHxerwa4');

  $stateProvider
    
  

    .state('menu.home', {
    url: '/',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.donate', {
    url: '/donate',
    views: {
      'side-menu21': {
        templateUrl: 'templates/donate.html',
        controller: 'donateCtrl'
      }
    }
  })

  .state('menu.page3', {
    url: '/volunteer',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.shop', {
    url: '/shop',
    views: {
      'side-menu21': {
        templateUrl: 'templates/shop.html',
        controller: 'shopCtrl'
      }
    }
  })

  .state('menu.socialMedia', {
    url: '/social',
    views: {
      'side-menu21': {
        templateUrl: 'templates/socialMedia.html',
        controller: 'socialMediaCtrl'
      }
    }
  })

  .state('menu.details', {
    url: '/product/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ProductInfo.html',
        controller: 'ProductInfoCtrl'
      }
    }
  })

  .state('menu.shoppingCart', {
    url: '/cart',
    views: {
      'side-menu21': {
        templateUrl: 'templates/shoppingCart.html',
        controller: 'shoppingCartCtrl'
    }
    }
  })

  .state('menu.abolitionist', {
    url: '/abolitionist',
    views: {
      'side-menu21': {
        templateUrl: 'templates/abolitionist.html',
        controller: 'abolitionistsCtrl'
    }
    }
  })

  .state('checkout', {
    url: '/checkout',
    templateUrl: 'templates/checkout.html',
    controller: 'checkoutCtrl'
   
  })

  .state('congrats', {
    url: '/congrats',
    templateUrl: './templates/congrats.html'
  })

  .state('donateCongrats', {
    url: '/donateCongrats',
    templateUrl: './templates/donateCongrats.html'
  })


$urlRouterProvider.otherwise('/side-menu21/')

  

});