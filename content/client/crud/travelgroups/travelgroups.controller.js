(function(){
    "use strict";
    angular 
        .module("client.crud")
        .controller("travelGroupsController", TravelGroupsController);
    
    TravelGroupsController.$inject = [];

    function TravelGroupsController() {
        var vm = this;

        vm.create = false;
        vm.openGroupDetails = false;
        vm.newItem = {};

        vm.item = {
            name: "Sports Party",
            role: "Organizer",
            event: "Super Bowl 2018",
            description: "We're partying at the Super Bowl for the year 2018 (terribly early planning) ! Come join us for the fun! We are meeting at 120 Newport Center Dr at Newport Beach. It'll be a wonderful 4-day road trip. Prepare yourselves!",
            numPeople: 6,
            transportation: "Car",
            carpool: {
                isTrue: true,
                seats: 4,
                location: "120 Newport Center Dr",
                location2: "Newport Beach, CA 92660",
                date: "02/01/2018",
                time: "6:00 AM"
            },
            location: "401 Chicago Ave, Minneapolis, MN 55415"
        };
    
        vm.people = [
            {name: "Tiffany Nguyen"},
            {name: "Raymundo Martinez"},
            {name: "Grant Griffin"},
            {name: "David Vergona"},
            {name: "Devonte Gabriel"},
            {name: "Nina Tran"}
        ];

        vm.myTravelGroups = [
            {
                name: "Sports Party",
                role: "Organizer",
                event: "Super Bowl 2018",
                numPeople: 6,
                transportation: "Car",
                carpool: true,
                location: "401 Chicago Ave, Minneapolis, MN 55415"

            },
            {
                name: "Weab Life",
                role: "Participant",
                event: "Anime Expo 2018",
                numPeople: 12,
                transportation: "Train",
                carpool: false,
                location: "1201 S Figueroa St, Los Angeles, CA 90015"
            }
        ];

        vm.setGroup = _setGroup;
        function _setGroup(){
            if (vm.openGroupDetails == true) {
                vm.openGroupDetails = false;
                // $("#travelgroupview").addClass("hidden");
            } else {
                vm.openGroupDetails = true;
                // $("#travelgroupview").removeClass("hidden");
            }
        }

        vm.pushNewItem = _pushNewItem;
        function _pushNewItem(){
            vm.newItem.role = "Organizer";
            var item = angular.copy(vm.newItem);
            vm.myTravelGroups.push(item);
            vm.newItem = {};
        }

    }
    
})();