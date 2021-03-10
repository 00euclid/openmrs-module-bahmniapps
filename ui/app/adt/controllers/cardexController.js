'use strict';

angular.module('bahmni.adt')
    .controller('CardexController', [
        '$scope', '$rootScope', '$stateParams', 'spinner', 'drugService', 'contextChangeHandler', 
        '$q', 'ngDialog', '$window', '$timeout', '$translate',
        ($scope, $rootScope, $stateParams, spinner, drugService, contextChangeHandler, 
        $q, ngDialog, $window, $timeout, $translate) => {
            
            const init = () => {
                console.log("Success!");
            };

            init();
        }
    ]);