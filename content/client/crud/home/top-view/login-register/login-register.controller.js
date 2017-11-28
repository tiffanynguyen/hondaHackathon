(function () {
    'use strict'
    angular.module('client.crud')
        .component('topView', {
            templateUrl: '/client/crud/home/top-view/login-register/login-register.html',
            controller: 'loginRegisterController',
            bindings: {
                selected: '<'
            }
        })

    angular.module('client.crud')
        .controller('loginRegisterController', LoginRegisterController)

    LoginRegisterController.$inject = ['$scope', '$stateParams']

    function LoginRegisterController($scope, $stateParams) {
        var vm = this


        vm.$onInit = init
        vm.sliderChange = _sliderChange

        function init() {
            console.log($stateParams)
            vm.selected = $stateParams.selected
            if ($stateParams.selected == 'login') {
                vm.showLoginForm = true
                vm.showRegisterForm = false
                vm.showOptions = false
            } else if ($stateParams.selected == 'register') {
                vm.showRegisterForm = true
                vm.showLoginForm = false
                vm.showOptions = false
            } else {
                vm.showRegisterForm = false
                vm.showLoginForm = false
                vm.showOptions = true
            }

            
        }

        function _sliderChange(priceRange) {
             vm.inputPriceRange = '$' + priceRange
        }

    }
})();