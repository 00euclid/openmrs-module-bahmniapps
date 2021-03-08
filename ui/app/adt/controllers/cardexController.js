'use strict';

angular.module('bahmni.adt')
    .controller('CardexController', [
        '$scope', '$rootScope', '$stateParams', 'spinner', 'wardService', 'backlinkService',
        ($scope, $rootScope, $stateParams, spinner, wardService, backlinkService) => {
            const init = () => {
                console.log("Hello");
            };

            init();
        }
    ]);