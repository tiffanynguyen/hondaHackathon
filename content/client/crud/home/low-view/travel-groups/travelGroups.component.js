(function(){
    "use strict";
    angular
        .module("client.crud")
        .component("homeTravelGroups", {
            templateUrl: "/client/crud/home/low-view/travel-groups/travelGroups.html",
            controller: "homeTravelGroupsController"
        });
})();

(function(){
    "use strict";
    angular
        .module("client.crud")
        .controller("homeTravelGroupsController", HomeTravelGroupsController);

        HomeTravelGroupsController.$inject = [];

        function HomeTravelGroupsController() {
            var vm = this;
            vm.$onInit = _onInit;

            vm.items = [
                {
                    name: "Sports Party",
                    event: "Super Bowl 2018",
                    numPeople: 20,
                    transportation: "Train",
                    carpool: false,
                    location: "401 Chicago Ave, Minneapolis, MN 55415"

                },
                {
                    name: "Weeb Life",
                    event: "Anime Expo 2018",
                    numPeople: 12,
                    transportation: "Car",
                    carpool: true,
                    location: "1201 S Figueroa St, Los Angeles, CA 90015"
                }
            ];

            function _onInit() {
                console.log("In HomeTravelGroupsController");
            }
        }
})();