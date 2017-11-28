(function () {
    angular.module('client.crud')
        .controller('homeController', HomeController)

    HomeController.$inject = []
    function HomeController() {
        var vm = this
        init()

        vm.defaultItinerary = [
            { name: "Grand Park", coordinates: { lat: 34.0452385, lng: -118.2697483 }, blurb:"Grand Park is a 12-acre park located in the civic center of Los Angeles, California. It is part of the larger Grand Avenue Project, with its first phase having opened in July 2012.", startTime: 1511992800, endTime: 1512009000},
            { name: "Pink Martini at The Theatre at Ace Hotel", coordinates: { lat: 34.0439463, lng: -118.263255 }, blurb:"Intricately restored Spanish Gothic-style theater from 1927 for concerts, talks & more.", startTime: 1512018000, endTime: 1512027000 },
            { name: "Drinks at The Standard", coordinates: { lat: 34.0451711, lng: -118.2680174 }, blurb:"Hip hotel in Downtown, offering a lively rooftop bar, beer garden & pool, plus a 24-hour restaurant.", startTime: 1512027901, endTime: 1512036043 }
        ]

    function init() {

    }
}
}) ();
