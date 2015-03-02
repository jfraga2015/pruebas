'use strict';

angular.module('testApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('clientes', {
        url: '/clientes',
        templateUrl: 'app/clientes/clientes.html',
        controller: 'ClientesCtrl'
      });
  });