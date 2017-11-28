/* global angular */
(function () {
    'use strict'
    angular.module('client.crud')
        .component('userProfile', {
            templateUrl: 'client/crud/profile/profile.html',
            controller: 'profileController as pCtrl'

        })

    angular.module('client.crud')
        .controller('profileController', ProfileController)

    ProfileController.$inject = ['$log']

    function ProfileController($log) {
        var vm = this
        vm.$onInit = _init()

        vm.profile = {
            name: "John Doe",
            age: "22",
            sex: "M",
        }
        vm.group = {
            members:["Tim","Aya","Ed"]
        }

        function _init() {

        }
    }
})()
