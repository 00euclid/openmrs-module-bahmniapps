"use strict";

angular.module('bahmni.common.displaycontrol.cardex')
    .directive('cardex', [function () {
        var controller = function () {
            init();
        };

        var init = function () {
        };

        return {
            restrict: 'E',
            controller: controller,
            templateUrl: "../common/displaycontrols/cardex/views/cardex.html",
            scope: {
                params: "=",
                patientUuid: "="
            }
        };
    }]);