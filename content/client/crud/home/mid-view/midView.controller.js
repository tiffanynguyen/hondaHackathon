(function () {
    angular.module('client.crud')
        .component('midView', {
            templateUrl: 'client/crud/home/mid-view/mid-view.html',
            controller: 'midViewController as mvCtrl',
            bindings: {
                itinerary: "<"
            }
        })

    angular.module('client.crud')
        .controller('midViewController', MidViewController)

    MidViewController.$inject = ['$scope']

    function MidViewController($scope) {
        let vm = this
        


        init()

        function init() {
            $scope.$on('mapLoader', data => {
                console.log(data)
            })
            
        }

    }
})();