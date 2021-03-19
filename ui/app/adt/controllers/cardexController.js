'use strict';

angular.module('bahmni.adt')
    .controller('CardexController', [
        '$scope', 'drugService', ($scope, drugService) => {
            
            // const getDrugs = term => {
            //     return drugService.search(term);
            // };

            const getDrugs = (drugName) => {
                return new Promise((resolve, reject) => {
                    let drugs = drugService.search(drugName)["$$state"];

                    setTimeout(() => {
                        let items = drugs["value"];

                        if (items !== undefined) {
                            resolve(items);
                        } else {
                            reject(new Error("No Drugs Found"));
                        }
                    }, 1000);
                });
            };

            $scope.onChange = (drugName) => {
                if (drugName.length > 2) {
                    getDrugs(drugName).then(drugs => {
                        
                    }).catch(error => {
                        console.log(error);
                    });
                    // setTimeout(() => { console.log(drugs["value"]); }, 3000);
                }
            };

            const init = () => {
                console.log("++++ Cardex Module! ++++");
            };

            init();
        }
    ]);