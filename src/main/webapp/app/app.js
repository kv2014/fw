define([
    "angularAMD",
    "angular-ui-router",
    "ui-bootstrap"
], function(angularAMD){

    "use strict";

    var app = angular.module("app", ["ui.router", "ui.bootstrap"]);

    //route
    app.config(['$qProvider', "$stateProvider", "$urlRouterProvider", "$locationProvider",
            function($qProvider, $stateProvider, $urlRouterProvider, $locationProvider){

        // ui-router bugs: http://stackoverflow.com/questions/39931983/angularjs-possible-unhandled-rejection-when-using-ui-router
        $qProvider.errorOnUnhandledRejections(false);

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            //login States and nested views
            .state("login", angularAMD.route({
                url: "/login",
                templateUrl: "app/login/template/partial-login.html",
                controller: "LoginController as login",
                controllerUrl: 'login/controller/login'
            }))

            //Home States and nested views
            .state("home", angularAMD.route({
                url: "/home",
                templateUrl: "app/home/template/partial-home.html",
                controller: "homeController as home",
                controllerUrl: 'home/controller/home'
            }))

            //test States and nested views
            .state("home.test", angularAMD.route({
                url: "/test",
                templateUrl: "app/test/template/partial-test.html",
                controller: "TestController as test",
                controllerUrl: 'test/controller/test'
            }))

            //About States and nested views
            .state("home.about", angularAMD.route({
                url: "/about",
                templateUrl: "app/about/template/partial-about.html",
                controller: "aboutController as about",
                controllerUrl: 'about/controller/about'
            }));

            // use the HTML5 History API
            // $locationProvider.html5Mode(true);
            $locationProvider.html5Mode({enabled: true, requireBase: true});
    }]);



    // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app, false, document.getElementsByTagName("body")[0]);
});
