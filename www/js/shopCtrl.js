angular.module('app').controller('shopCtrl', ['$scope', '$http', function ($scope, $stateParams, mainService) {

    $scope.test = 'uhygfrtyuijnbvfrtyc';
    $scope.test1 = mainService.test1;
    console.log("IS ANYONE THEREEE")
    $scope.recProducts = function(){
      mainService.getAllProducts().then(function(result) {
          console.log("Hello from the shopCtrl pre results")
        $scope.products = result.data;
        console.log(result.data)
      });
  }

  $scope.recProducts();

}])