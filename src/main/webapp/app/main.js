"use strict";

require.config({
    baseUrl: "app/",
    paths: {
        "jquery": "../bower_components/jquery/dist/jquery",
        "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap",
        "angular": "../bower_components/angular/angular",
        "angular-ui-router": "../bower_components/angular-ui-router/release/angular-ui-router",
        "angularAMD": '../bower_components/angularAMD/angularAMD',
        "ui-bootstrap": "../bower_components/angular-bootstrap/ui-bootstrap-tpls",

        "ajaxService": "common/service/ajax-service",
        "dummyDirective": "common/directive/dummy-directive",
        'register': 'common/register/register',
        'tools': 'common/utils/tools'
    },
    shim: {
        "angular": ["jquery"],
        "register": ["angular"],
        "angularAMD": ["angular"],
        "angular-ui-router": ["angular"],
        "bootstrap": ["jquery"],
        "ui-bootstrap": ["angular", "bootstrap"]
    },
    deps: ["app"]
});
