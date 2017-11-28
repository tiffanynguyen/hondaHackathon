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
        vm.deleteInterest = _deleteInterest
        vm.addInterest = _addInterest

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
                user: false,
                interests: false,
                friend: false,
            }
        }

        function _deleteInterest(idx) {
            $log.log(idx)
            vm.profile.interests.splice(idx, 1)
        }

        function _addInterest(int) {
            vm.profile.interests.push(int)
            vm.edit.interests = !vm.edit.interests
        }

    }
})()
