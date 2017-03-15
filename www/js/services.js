angular.module('app.services', [])

// .factory('BlankFactory', [function(){

// }])

.service('BlankService', ['$http', function($http){

    this.getAllProducts = function() {
      return $http.get('https://ourrescueapp.herokuapp.com/products').then(function(resp){
        console.log(resp)
        return resp;
      })
    }
    

    this.getOneProduct = function(id) {
      return $http.get(`https://ourrescueapp.herokuapp.com/products/${id}`).then(function(resp){
        
        return resp;
      })
    }

  




    
}]);