'use strict';

var angular = require('angular');
require('angular-route');
require('angular-material');
var _templateBase = './templates';

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngMaterial']);

var index = require('./modules/index');

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: _templateBase + '/index.html',
    controller: 'indexController',
  });

  $routeProvider.when('/chat', {
    templateUrl: _templateBase + '/chat.html',
    controller: 'chatCtrl',
    controllerAs: 'vm',
  });

  $routeProvider.otherwise({ redirectTo: '/' });

}]);
