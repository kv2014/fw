define([
    'app',
    "register",
    "ajaxService",
    "tools",
    "dummyDirective"
], function (app, register, ajaxService, ts) {

    "use strict";


    var testController = function (ajaxService, $scope) {

        $scope.aa = "test property~~";

        $scope.search = function () {
            var personName = $scope.personName;

            var paramOptions = {
                personName: personName
            };

            ajaxService.search('search', paramOptions, function(result){
                var data = result.data;

                $scope.personModel = {
                    name: data.name,
                    age: data.age,
                    address: data.address
                };
            });
        };
    };

    register(app).controller("TestController", testController);

    testController.$inject = ["ajaxService", "$scope"];
});