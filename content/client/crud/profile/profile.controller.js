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
        vm.$onInit=_init()

        function _init() {

        }
    }
})()
