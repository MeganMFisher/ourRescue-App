angular.module('app.services', [])
.service('BlankService', ['$http', function($http){

  // *******************************************
  // *              BlankService               *
  // *******************************************

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
  this.getCart = function() {
    return $http({
      url: baseUrl + '/api/viewcart',
      method: 'GET',
      headers: {
        'authorization': localStorage.getItem('token')
      }
    }).then(res => {
      localStorage.setItem('token', res.data.token.token);
      return res.data.cart
    })
  }

  this.addToCart = function(size, quantity, detail) {
    return $http({
      url: baseUrl + '/api/cart',
      method: 'POST',
      headers: {
        'authorization': localStorage.getItem('token')
      },
      data: {
        size: size,
        quantity: quantity,
        name: detail.name,
        price: detail.price,
        imageurl: detail.imageurl, 
        id: detail.id
      }
    })
    .then(res => {
      localStorage.setItem('token', res.data.token.token);
      return res.data.cart
    })
  }

  this.removeFromCart = function(product) {
    return $http({
      url: baseUrl + '/api/removecart',
      method: 'POST', 
      headers: {
        'authorization': localStorage.getItem('token')
      },
      data: product
    })
    .then(res => {
      localStorage.setItem('token', res.data.token.token);
      return res.data.cart
    })

  }

  this.updateCart = function(cart) {
    return $http({
      url: baseUrl + '/api/update',
      method: 'POST', 
      headers: {
        'authorization': localStorage.getItem('token')
      },
      data: cart
    })
    .then(res => {
      localStorage.setItem('token', res.data.token.token);
      return res.data.cart
    })

  }

  this.createToken = function(){
    return $http({
      method: 'POST',
      url: baseUrl + '/api/createToken'
    }).then(res => {
      localStorage.setItem('token', res.data.token.token);
      return res.data.cart
    })
  }


  this.addToAddressDatabase = function() {
    return $http({
      url: baseUrl + '/api/address',
      method: 'POST',
      data: {
        size: size,
        quantity: quantity,
        name: detail.name,
        price: detail.price,
        imageurl: detail.imageurl, 
        id: detail.id
      }
    
  })
  }

    
}]);//this is the end of the module  