/* global angular */
(function () {
    'use strict';

    angular.module('client.crud', [])
    angular.module('client.crud').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.login', {
                url: '/login',
                abstract: true
            })
            .state('site.login-register', {
                url: '/login',
                views: {
                    'content@site': {
                        templateUrl: 'client/crud/login-register.html',
                        controller: 'loginRegisterController as lRCtrl'
                    }
                }
            })
    }
})();