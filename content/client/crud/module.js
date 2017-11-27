/* global angular */
(function () {
    'use strict';

    angular.module('client.crud', [])
    //temp route
    angular.module('client.crud').config(RouteConfig);
    RouteConfig.$inject = ["$stateProvider"];
    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.navbar', {
                url: '/navbar',
                views: {
                    'content@site': {
                        templateUrl: 'client/crud/navbar/navbar.html',
                        controller: 'navbarController as navbarCtrl'
                    }
                }
            })
    }
    
})();