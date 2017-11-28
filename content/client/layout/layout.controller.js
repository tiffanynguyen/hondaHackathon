(function () {
    angular.module('client.layout')
        .controller('layoutController', LayoutController)

    LayoutController.$inject = ['$state']
    function LayoutController($state) {
        var vm = this
        vm.logout = _logout
        

        init()

        function init() {
            if($state.current.name == "site.home"){
                vm.hideLoginReg = true
            } else {
                vm.hideLoginReg = false
            }
        }
        function _logout(){
            $state.go('site.home', ({selected: 'login'}), {reload:true})
        }
        
        
        
    }
})();
