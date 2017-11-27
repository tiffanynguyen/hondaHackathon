/* global angular */
(function() {
    'use strict'

    angular.module('client.layout', ['ui.router'])

    angular.module('client.layout').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site', {
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'client/layout/layout.tpl.html'
                    }
                }
            })
            .state('site.home', {
                url: '/home',
                views: {
                    'content': {
                        templateUrl: 'client/crud/home.home.html',
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
})()
