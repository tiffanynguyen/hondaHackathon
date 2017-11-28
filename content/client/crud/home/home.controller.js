(function () {
    angular.module('client.crud')
        .controller('homeController', HomeController)

    HomeController.$inject = []
    function HomeController() {
        var vm = this
        vm.$onInit = init
        init()

        function init() {

        }
    }
})();
