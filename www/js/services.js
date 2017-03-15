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

    this.getUsers = function() {
			return $http({
				method: 'GET',
				url: '/user'
			});
		};

		this.getUserOrder = function(id) {
			return $http({
					method: 'GET',
					url: '/order/' + id
				})
				.catch(function(err) {
					console.log(err);

				});
		};

		this.getProducts = function() {
			return $http({
				method: "GET",
				url: "/products"
			});
		};

		this.addToCart = function(id, productid, qty) {
			return $http({
				method: 'POST',
				url: '/add/item/cart/' + id,
				data: {
					id: productid,
					qty: qty
				}
			});
		};

		this.updateProductQty = function(id, qty) {
			return $http({
				method: 'PUT',
				url: "/update/qty/" + id,
				data: {
					qty: qty
				}
			});
		};

		this.removeFromCart = function(id) {
			return $http({
				method: 'DELETE',
				url: '/delete/item/cart/' + id
			});
		};

		this.placeOrder = function(id, orderid) {
			return $http({
				method: 'PUT',
				url: '/order/complete/' + orderid + "/" + id
			});
		};
  




    
}]);