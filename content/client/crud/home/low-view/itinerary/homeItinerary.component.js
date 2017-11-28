(function () {
    "use strict";
    angular
        .module("client.crud")
        .component("homeItinerary", {
            templateUrl: "/client/crud/home/low-view/itinerary/homeItinerary.html",
            controller: "homeItineraryController"
        });
})();

(function () {
    "use strict";
    angular
        .module("client.crud")
        .controller("homeItineraryController", HomeItineraryController);

    HomeItineraryController.$inject = ['$log', '$state'];

    function HomeItineraryController($log, $state) {
        var vm = this;
        vm.$onInit = _onInit;
        vm.addEvent = _addEvent
        vm.removeEvent = _removeEvent

        vm.items = [
            {
                startDate: "11/27/2017",
                startTime: "10:00 AM",
                endDate: "11/28/2017",
                endTime: "3:00 PM",
                name: "Honda Hackathon",
                location: "1201 S Figueroa St, Los Angeles, CA 90015"
            },
            {
                startDate: "02/04/2018",
                startTime: "8:00 AM",
                endDate: "02/28/2018",
                endTime: "10:00 PM",
                name: "Super Bowl 52",
                location: "401 Chicago Ave, Minneapolis, MN 55415"
            },
            {
                startDate: "07/05/2018",
                startTime: "8:00 AM",
                endDate: "07/08/2018",
                endTime: "2:00 AM",
                name: "Anime Expo",
                location: "1201 S Figueroa St, Los Angeles, CA 90015"
            },
            {
                startDate: "12/13/2017",
                startTime: "8:00 AM",
                endDate: "01/07/2018",
                endTime: "12:00 AM",
                name: "Queen Mary Chill",
                location: "1126 Queens Highway, Long Beach, CA 90802"
            }
        ];

        var defaultItinerary = [
            {
                name: "Grand Park",
                coordinates: { lat: 34.0452385, lng: -118.2697483 },
                location: "200 N Grand Ave, Los Angeles, CA 90012",
                blurb: "Grand Park is a 12-acre park located in the civic center of Los Angeles, California. It is part of the larger Grand Avenue Project, with its first phase having opened in July 2012.",
                startDate: '11/29/17',
                endDate: "11/29/17",
                startTime: '3:00 p.m.',
                endTime: '5:30 p.m.'
            },
            {
                name: "Pink Martini at The Theatre at Ace Hotel",
                coordinates: { lat: 34.0439463, lng: -118.263255 },
                location: "800 W Olympic Blvd A245, Los Angeles, CA 90015",
                blurb: "Intricately restored Spanish Gothic-style theater from 1927 for concerts, talks & more.",
                startDate: '11/29/17',
                endDate: "11/29/17",
                startTime: '7:00 p.m.',
                endTime: '10:30 p.m.'
            },
            {
                name: "Drinks at The Standard",
                coordinates: { lat: 34.0451711, lng: -118.2680174 },
                location: "550 S Flower St, Los Angeles, CA 90071",
                blurb: "Hip hotel in Downtown, offering a lively rooftop bar, beer garden & pool, plus a 24-hour restaurant.",
                startDate: '11/29/17',
                endDate: "11/30/17",
                startTime: '10:00 p.m.',
                endTime: '2:00 a.m.'
            }
        ]

        function _onInit() {
            if ($state.current.name == 'site.itinerary') {
                vm.defaultItinerary = defaultItinerary

            }
        }

        function _addEvent(idx) {
            let event = vm.defaultItinerary.splice(idx, 1)
            vm.items.push(event[0])
        }

        function _removeEvent(idx) {
            vm.items.splice(idx, 1)
        }
    }
})();