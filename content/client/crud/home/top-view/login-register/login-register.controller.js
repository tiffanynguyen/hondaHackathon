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

    LoginRegisterController.$inject = ['$stateParams', '$state']

    function LoginRegisterController($stateParams, $state) {
        var vm = this


        vm.$onInit = init
        vm.sliderChange = _sliderChange
        vm.submitLogin = _submitLogin
        vm.submitReg = _submitReg

        function init() {
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

        function _submitLogin() {
            $state.go('site.profile', null, {reload:true})
        }
        function _submitReg() {
            vm.showLoginForm = true
            vm.showRegisterForm = false
            vm.showOptions = false
        }

    }
})();