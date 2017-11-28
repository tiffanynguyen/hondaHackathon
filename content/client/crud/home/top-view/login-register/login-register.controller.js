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
    LoginRegisterController.$inject = ['$scope']

    function LoginRegisterController($scope) {
        var vm = this
        vm.$onInit = init
   
        init()

        function init() {
        }
    
    }
})();