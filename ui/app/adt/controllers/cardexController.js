'use strict';

angular.module('bahmni.adt')
    .controller('CardexController', [
        '$scope', 'drugService', ($scope, drugService) => {
            
            const init = () => {
                console.log("Success!");
            };

            init();
        }
    ]);