/* global angular */
(function () {
    'use strict'
    angular.module('client.crud')
        .component('topView', {
            templateUrl: '/client/crud/home/top-view/login-register/login-register.html',
            controller: 'loginRegisterController',
            bindings: {
                //url: '<'
            }
        })

    angular.module('client.crud')
        .controller('loginRegisterController', LoginRegisterController)
    LoginRegisterController.$inject = ['$stateParams', '$log']

    function LoginRegisterController($stateParams, $log) {
        var vm = this

        vm.$onInit = init

        init()

        function init() {
            //based on clicked of dropdown on nav bar

            vm.showForm = false


        }
    }
})();