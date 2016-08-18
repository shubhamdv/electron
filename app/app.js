'use strict';

var angular = require('angular');
require('angular-route');
require('angular-material');
var _templateBase = './templates';

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngMaterial']);

var index = require('../app/index');

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/home' });

}]);
