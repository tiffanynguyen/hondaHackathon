(function(){
    "use strict";
    angular
        .module('client.crud')
        .controller('navbarController', NavbarController);
    
    NavbarController.$inject = [];

    function NavbarController() {
        var vm = this;
        vm.$onInit = _onInit;

        _onInit();
        function _onInit() {
            console.log("Controller for navbar..attempt");
        }
    }
})();