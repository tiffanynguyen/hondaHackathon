/* global angular */
(function() {
    'use strict'

    angular.module('client.crud')
        .controller('loginRegisterController', LoginRegisterController)

        LoginRegisterController.$inject = ['$stateParams', '$log']

    function LoginRegisterController($stateParams, $log) {
        var vm = this
        
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
})()