(function () {
    'use strict'
    angular.module('client.crud')
        .component('topView', {
            templateUrl: '/client/crud/home/top-view/quick-trip/quick-trip.html',
            controller: 'quickTripController',
            bindings: {
                //selected: '<'
            }
        })

    angular.module('client.crud')
        .controller('quickTripController', QuickTripController)
    QuickTripController.$inject = []

    function QuickTripController() {
        var vm = this

        vm.$onInit = init

        init()

        function init() {

        }
    }
})();