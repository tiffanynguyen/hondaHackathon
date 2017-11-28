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
        .directive("dataDateTimePicker", function () {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (scope, element, attrs, ngModelCtrl) {
                    var parent = $(element).parent()
                    var dtp = parent.datetimepicker({
                        format: "LL",
                        showTodayButton: true
                    })
                    dtp.on("dp.change", function (e) {
                        ngModelCtrl.$setViewValue(moment(e.date).format("LL"))
                        scope.$apply()
                    })
                }
            }
        })
    LoginRegisterController.$inject = ['$scope', '$stateParams']

    function LoginRegisterController($scope, $stateParams) {
        var vm = this


        vm.$onInit = init


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

    }
})();