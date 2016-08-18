(function() {

    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider.when('/chat', {
            templateUrl: 'chat/chat.html',
            controller: 'chatCtrl',
            controllerAs: 'vm',
        });
    }
})();
