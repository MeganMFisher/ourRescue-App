angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {


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


$urlRouterProvider.otherwise('/side-menu21/')

  

});