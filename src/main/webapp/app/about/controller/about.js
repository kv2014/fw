define([
    'app',
    "register",
    "ajaxService",
    "tools",
    "dummyDirective"
], function (app, register, ajaxService, ts) {

    "use strict";

    var aboutController = function(ajaxService, $scope, $http){
        $scope.vm = {};
        $scope.vm.say = "About Page";
        $scope.printLog = function () {
            ajaxService.log();
        }.bind(this);
    };

    register(app).controller("aboutController", aboutController);

    aboutController.$inject = ["ajaxService", "$scope", "$http"];
});
