/* global angular */
(function() {
    'use strict'

    angular.module('client.themeHome', ['ui.router'])

    angular.module('client.themeHome').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        console.log("set up")
        $stateProvider
            .state('site.themeHome', {
                    url: '/themeHome'
                    ,views: {
                        'content@site': {
                     templateUrl: 'client/themeHome/views/themeHome.html'
                    , controller: 'themeHomeController as $ctrl'
                        }
                    }
                })
            
    }
})()
