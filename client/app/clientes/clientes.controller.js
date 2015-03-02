'use strict';

angular.module('testApp')
  .controller('ClientesCtrl', function ($scope,$http) {
    $scope.message = 'Hello';
    $scope.cliente={nombre:'Jimmy Alcala',cedula:'10477484'}

    $scope.guadar = function  () {
 		$http.post('/api/clientes',$scope.cliente).success(function (data) {
 			console.log(data);
 		}).error(function  (err) {
 			console.log(err);
 		})
    };

  });
