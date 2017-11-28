(function () {
    'use strict'
    angular.module('client.crud')
        .controller('mapController', MapController)

    MapController.$inject = ['$log']

    function MapController($log) {
        var vm = this
        vm.$onInit = _init()

        function _init() {
            
        }
    }
})()
