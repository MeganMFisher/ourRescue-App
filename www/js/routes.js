angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

// .config(function($stateProvider, $urlRouterProvider, $authProvider) {

  // $urlRouterProvider.otherwise('/');

  // let skipIfLoggedIn = ['$q', '$location', '$auth', ($q, $location, $auth) => {
  //   let deferred = $q.defer();
  //   if ($auth.isAuthenticated()) $location.path('/home')
  //   else  deferred.resolve();
  //   return deferred.promise;
  // }];
  // let loginRequired = ['$q', '$location', '$auth', ($q, $location, $auth) => {
  //   let deferred = $q.defer();
  //   if ($auth.isAuthenticated()) deferred.resolve();
  //   else $location.path('/login');
  //   return deferred.promise;
  // }];

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
      //   resolve: {
      //   loginRequired: loginRequired
      // }
    }
    }
  })

  // .state('login', {
  //   url: '/',
  //   templateUrl: 'src//login.html',
  //   controller: '',
  //   resolve: {
  //       skipIfLoggedIn: skipIfLoggedIn
  //   }
  // })
  // .state('signup', {
  //   url: '/signup',
  //   templateUrl: 'src/views/signup.html',
  //   controller: '',
  //   resolve: {
  //       skipIfLoggedIn: skipIfLoggedIn
  //   }
  // })
  // $authProvider.loginUrl = '/auth/login'
  // $authProvider.signupUrl = '/auth/signup'
    


$urlRouterProvider.otherwise('/side-menu21/')

  

});