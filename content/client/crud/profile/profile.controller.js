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
            interests: ["Cake", "Fun", "Sportsball"]
        }
        vm.group = {
            name: "Summer Family Trip",
            members: ["Tim", "Aya", "Ed"]
        }

        vm.friends = [
            { name: 'Jacob', location: "London" },
            { name: "Apu", location: 'London' },
            { name: 'Mufasa', location: 'Lion King' }]

        function _init() {
            vm.edit = {
                user:false,
                interests:false,
                friend:false,
            }
        }
    }
})()
