/* global angular */
(function () {
    'use strict'
    angular.module('client.crud')
        .component('topView', {
            templateUrl: '/client/crud/home/top-view/login-register/login-register.html',
            controller: 'LoginRegisterController as lRCtrl',
            bindings: {
            }
        })



    LoginRegisterController.$inject = ['$stateParams', '$log']

    function LoginRegisterController($stateParams, $log) {
        var vm = this
        vm.$onInit = init

        init()

        function init() {
            //based on clicked of dropdown on nav bar
            vm.showLogin = false
            vm.showRegister = true

            // if ($stateParams.id) {
            //    vm.showMode = false
            // } else {
            //     vm.showMode = true
            // }
        }
    }
})();