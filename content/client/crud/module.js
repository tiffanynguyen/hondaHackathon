/* global angular */
(function () {
    'use strict';
    angular.module('client.crud', [])
    angular.module('client.crud').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.home', {
                url: '/home/:selected',
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
            .state('site.travelgroups', {
                url: '/travelgroups',
                views: {
                    'content': {
                        templateUrl: 'client/crud/travelgroups/travelgroups.html',
                        controller: 'travelGroupsController as travelCtrl'
                    }
                }
            })           
            .state('site.bike', {
                url: '/bikepaths',
                views: {
                    'content': {
                        templateUrl: 'client/crud/maps/bike-map.html',
                        controller: 'mapController as mpCtrl'
                    }
                }
            })
            .state('site.metro', {
                url: '/public-transit',
                views: {
                    'content': {
                        templateUrl: 'client/crud/maps/metro-map.html',
                        controller: 'mapController as mpCtrl'
                    }
                }
            })
    }
})();