/* global angular */
(function () {
    'use strict';
    angular.module('client.crud', [])
    angular.module('client.crud').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.home', {
                url: '/home',
                views: {
                    'content': {
                        templateUrl: 'client/crud/home/home.html',
                        controller: 'homeController as hCtrl'
                    }
                }
            })
            .state('site.itinerary', {
                url: '/itinerary',
                views: {
                    'content': {
                        templateUrl: 'client/crud/home/home.html',
                        controller: 'homeController as hCtrl'
                    }
                }
            })
            .state('site.profile', {
                url: '/profile',
                views: {
                    'content': {
                        component: 'userProfile'
                    }
                }
            })            
    }
})();