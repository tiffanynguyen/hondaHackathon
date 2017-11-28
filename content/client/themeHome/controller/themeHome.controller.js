(function () {
    'use strict'

    angular.module('client.themeHome')
        .controller('themeHomeController', ThemeHomeController);

        ThemeHomeController.$inject = ['$scope'];

    function ThemeHomeController($scope) {
        let $ctrl = this;
        $ctrl.firstName ="dan";
    }
})();