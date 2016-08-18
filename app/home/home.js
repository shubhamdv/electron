(function() {

    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl',
            controllerAs: 'vm',
        });
    }
})();
