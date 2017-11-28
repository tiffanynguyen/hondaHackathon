/* global angular */
(function() {
    'use strict'

    angular.module('client.layout', ['ui.router'
    ,'ngAnimate'
    , 'ngSanitize'
    , 'ngTouch'
    , 'ui.bootstrap'
])

    angular.module('client.layout').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site', {
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'client/layout/layout.tpl.html',
                        controller: 'layoutController as lCtrl'

                    }
                }
            })
    }
})()
