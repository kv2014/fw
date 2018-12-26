define([
    'app',
    "register",
    'tools'
], function (app, register, ts) {
    "use strict";

    var homeController = function ($scope, $http) {
        $scope.vm = {};
        $scope.vm.say = "Home Page";
    };

    register(app).controller("homeController", homeController);

    homeController.$inject = ["$scope", "$http"];
});
