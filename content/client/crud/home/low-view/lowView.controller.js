(function () {
    "use strict";
    angular
        .module("client.crud")
        .component("lowView", {
            templateUrl: "/client/crud/home/low-view/lowViewDetails.html",
            controller: 'lowerViewController as lvCtrl'
        })

    angular.module('client.crud')
        .controller('lowerViewController', LowerViewController)

    LowerViewController.$inject = ['$log', '$state']

    function LowerViewController($log, $state) {

        var vm = this
        vm.homePage = true
        vm.$onInit = _onInit

        function _onInit() {
            if ($state.current.name == 'site.itinerary') {
                vm.homePage = false
            }
        }

    }
})();