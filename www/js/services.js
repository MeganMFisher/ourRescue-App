angular.module('app.services', [])
.service('BlankService', ['$http', function($http){

this.cart;

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
      localStorage.setItem('token', res.data.token);
      return res
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
      localStorage.setItem('token', res.data.token);
      return res
    })

  }

  // this.addToCart().then(res => {
  //   console.log(res)
  //   getCart().then(res => {
  //     console.log(res)
  //   })
  // })



    
}]);//this is the end of the module  