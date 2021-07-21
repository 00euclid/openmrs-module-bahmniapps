'use strict';

angular.module('bahmni.adt')
    .controller('CardexController', [
        '$scope', '$rootScope', '$compile', 'treatmentConfig', 'drugService', 'appService', ($scope, $rootScope, $compile, treatmentConfig, drugService, appService) => {


            /**
             * Global variables
             * searchedDrugs: Array (Holds results from the search temporarily)
             * searchResultHolder: HtmlUlElement (Views the element in the interface)
             */
            let searchedDrugs = [];
            let searchResultHolder = $("ul#search-result");

            console.log(treatmentConfig());

            /**
             * Promise: getDrugs
             * 
             * A promise to fetch values from drug service and 
             * confirm the values have been loaded to the variable.
             * 
             * There is a slight delay in loading the searched 
             * values onto the variable because of the size.
             * Hence, the promise waits and confirms that the
             * array has been populated
             * 
             * @param {*} drugName 
             * @returns Array(BahmniDrug)
             */
            const getDrugs = drugName => {
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


            /**
             * Function: onChange
             * 
             * Gathers the keyword entered by the user,
             * calls the getDrugs method to get drug array
             * and populates the search box to show the
             * search results to the user.
             * 
             * Works based on changes to the input box and 
             * will begin search once the no. of letters in the
             * search keyword is greater than 2.
             * 
             * @param {*} drugName 
             */
            $scope.onChange = drugName => {

                if (drugName.length > 2) {
                    getDrugs(drugName).then(drugs => {

                        searchedDrugs = [...drugs];

                        if(Array.isArray(drugs) && drugs.length > 0) {
                            searchResultHolder.parent().removeClass("hidden");
                        } else {
                            searchResultHolder.parent().addClass("hidden");
                        }

                        // Clear out the holder
                        searchResultHolder.html("");

                        drugs.forEach(drug => {
                            let drugText = `${drug.name} (${drug.dosageForm.display})`;
                            searchResultHolder.append(`<li class='drug-item' ng-click="onSelect('${drug.uuid}')">${drugText}</li>`);
                        });

                        // Compile the element
                        // Dyanamically generated elemetns do not support ng-click
                        // Conatiner is compiled within scope to enable angular functionalities
                        $compile(searchResultHolder)($scope);

                        drugs = null;

                    }).catch(error => {
                        console.log(error);
                    });
                } else {
                    searchResultHolder.parent().addClass("hidden");
                }
            };


            /**
             * Function: onSelect
             * 
             * Handles the drug selection operation
             * Gets selected drug and fills fields with
             * appropriate values automatically
             * 
             * @param {*} uuid 
             */
            $scope.onSelect = uuid => {
                let selectedDrug = searchedDrugs.find(drug => drug.uuid === uuid);
                // Logic to autofill the form
            };

            /**
             * Function: init
             * 
             * Initialzing some aspects of the code.
             * Might come in handy later on.
             */
            const init = () => {
                $scope.treatmentConfig = treatmentConfig;
            };

            init();
        }
    ]);