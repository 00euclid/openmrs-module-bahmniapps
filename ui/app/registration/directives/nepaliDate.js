'use strict';

angular.module('bahmni.registration')
    .directive('nepaliDate', function () {
        return {
            restrict: 'AE',
            templateUrl: 'views/nepaliDate.html',
            controller: 'NepaliDateDirectiveController',
            scope: {
            }
        };
    })
    .controller('NepaliDateDirectiveController', ['$scope', '$element', '$translate', function ($scope, $element, $translate) {
        
        var $currentBsDate = NepaliFunctions.GetCurrentBsDate();
        $scope.ndPlaceholder = `${$currentBsDate.year}/${$currentBsDate.month}/${$currentBsDate.day}`;
        
        $element = $element[0].firstChild;
        var $adElement = 'birthdate';
        var $angAdElement = angular.element($(`#${$adElement}`));

        var triggerChange = function() {
            $angAdElement.triggerHandler('change');
        };

        $scope.triggerBlur = function() {
            $angAdElement.triggerHandler('blur');
        }
        
        var init = function() {
            $element.nepaliDatePicker({
                disableDaysAfter: 0,
                ndpYear: true,
                ndpMonth: true,
                ndpEnglishInput: $adElement,
                onChange: function() {
                    triggerChange();
                }
            });
        };

        init();
    }]);
