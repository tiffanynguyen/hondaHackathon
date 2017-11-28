(function () {
    angular.module('client.layout')
        .controller('layoutController', LayoutController)

    LayoutController.$inject = ['$state']
    function LayoutController($state) {
        var vm = this
        

        init()

        function init() {
            if($state.current.name == "site.profile"){
                vm.hideLoginReg = false
            } else {
                vm.hideLoginReg = true
            }
        }
        
        
        
    }
})();
