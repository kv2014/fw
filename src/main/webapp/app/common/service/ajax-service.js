define([
    "app",
    "register",
    "tools"
], function (app, register, ts) {
    "use strict";

    var ajaxService = function($http){
        return {
            log: function (a) {
                console.log("Into Service");
            },
            search: function (url, options, callback) {
                this.$http = $http;

                this.$http.get('search', {
                    params: options
                }).then(function (result) {
                    callback(result);
                });
            }
        };

    };

    register(app).service("ajaxService", ajaxService);
    ajaxService.$inject = ["$http"];
});
