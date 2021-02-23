"use strict";

angular.module('bahmni.common.displaycontrol.cardex')
    .directive('cardex', ['', function () {
        var controller = function ($scope) {
            init($scope);
        };

        var init = function ($scope) {
            $scope.isDataPresent = function () {
                return false;
            };
        };

        return {
            restrict: 'E',
            controller: controller,
            templateUrl: "../common/displaycontrols/cardex/views/cardex.html",
            scope: {
                params: "=",
                patientUuid: "=",
                visitSummary: "="
            }
        };
    }]);