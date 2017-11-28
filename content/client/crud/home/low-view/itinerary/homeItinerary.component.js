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

        HomeItineraryController.$inject = [];

        function HomeItineraryController() {
            var vm = this;
            vm.$onInit = _onInit;

            vm.items = [
                {
                    startDate: "11/27/2017",
                    startTime: "10:00 AM",
                    endDate: "11/28/2017",
                    endTime: "3:00 PM",
                    event: "Honda Hackathon",
                    location: "1201 S Figueroa St, Los Angeles, CA 90015"
                },
                {
                    startDate: "02/04/2018",
                    startTime: "8:00 AM",
                    endDate: "02/28/2018",
                    endTime: "10:00 PM",
                    event: "Super Bowl 52",
                    location: "401 Chicago Ave, Minneapolis, MN 55415"
                },
                {
                    startDate: "07/05/2018",
                    startTime: "8:00 AM",
                    endDate: "07/08/2018",
                    endTime: "2:00 AM",
                    event: "Anime Expo",
                    location: "1201 S Figueroa St, Los Angeles, CA 90015"
                },
                {
                    startDate: "12/13/2017",
                    startTime: "8:00 AM",
                    endDate: "01/07/2018",
                    endTime: "12:00 AM",
                    event: "Queen Mary Chill",
                    location: "1126 Queens Highway, Long Beach, CA 90802"
                }
            ];

            function _onInit() {
                console.log("In HomeItineraryController");
            }
        }
})();