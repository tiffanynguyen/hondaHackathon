// (function () {
//     'use strict'
//     angular.module('client.crud')
//         .component('topView', {
//             templateUrl: '/client/crud/home/top-view/quick-trip/quick-trip.html',
//             controller: 'quickTripController',
//             bindings: {
//                 selected: '<'
//             }
//         })
        

//     angular.module('client.crud')
//         .controller('quickTripController', QuickTripController)
//         .directive("datepicker", function () {
//             return {
//               restrict: "A",
//               require: "ngModel",
//               link: function (scope, elem, attrs, ngModelCtrl) {
//                 var updateModel = function () {
//                   scope.$apply(function () {
//                     ngModelCtrl.$modelValue = elem.val();
//                   });
//                 };
//                 elem.datetimepicker({
//                   useCurrent: false,
//                   minuteStepping:5,
//                   icons: {
//                     time: 'fa fa-clock-o',
//                     date: 'fa fa-calendar',
//                     up:   'fa fa-arrow-up',
//                     down: 'fa fa-arrow-down'
//                   }
//                 });
//                 elem.on("change",function (e) {
//                   updateModel();
//                 });
//               }
//             }
//           })
//     QuickTripController.$inject = ['datetimepicker']

//     function QuickTripController(datetimepicker) {
//         var vm = this

//         vm.$onInit = init

//         init()

//         function init() {
            
//         }
      
//     }
// })();