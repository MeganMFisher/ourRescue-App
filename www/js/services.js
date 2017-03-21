angular.module('app.services', [])
.service('BlankService', ['$http', function($http){



let devUrl = 'http://localhost:8100'
let herokuUrl = 'https://ourrescueapp.herokuapp.com'

let baseUrl = devUrl;


    this.getAllProducts = function() {
      return $http.get(baseUrl + '/products').then(function(resp){
        return resp;
      })
    }
    

    this.getOneProduct = function(id) {
      return $http.get(baseUrl + `/products/${id}`).then(function(resp){
        
        return resp;
      })
    }

    this.getAbolitionists = function() {
      return $http.get(baseUrl + '/abolitionists').then(function(resp){
        
        return resp;
    
      })
    }


  this.addToCart = function(size, quantity, detail) {
    return $http.post(baseUrl + '/api/cart', {
      size: size,
      quantity: quantity,
      name: detail.name,
      price: detail.price,
      imageurl: detail.imageurl
    })
  }

  this.getCart = function() {
    return $http.get(baseUrl + '/api/cart')

  }


    
}]);