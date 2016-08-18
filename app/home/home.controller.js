(function() {

    'use strict';

    angular.module('app')
        .controller('homeCtrl', HomeController);

    HomeController.$inject = [ '$scope', '$location' ];

    function HomeController( $scope, $location ) {
        var vm = this;

        // shows how to use angular material service
        // $mdToast.show($mdToast.simple({position: 'top'}).content('Welcome Back!'));

        vm.openCards = function() {
            $location.path('/chat');
        }
    }
})();
