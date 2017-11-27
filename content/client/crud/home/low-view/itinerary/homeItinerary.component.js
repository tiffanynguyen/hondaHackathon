(function(){
    "use strict";
    angular
        .module("client.crud")
        .component("homeItinerary", {
            templateUrl: "/client/crud/home/low-view/itinerary/homeItinerary.html",
            controller: "homeItineraryController"
        });
})();

(function(){
    "use strict";
    angular
        .module("client.crud")
        .controller("homeItineraryController", HomeItineraryController);

        HomeItineraryController.$inject = ["$scope"];

        function HomeItineraryController($scope) {
            var vm = this;
            vm.$scope = $scope;
            vm.$onInit = _onInit;

            _onInit();
            function _onInit() {
                console.log("In HomeItineraryController");
            }
        }
})