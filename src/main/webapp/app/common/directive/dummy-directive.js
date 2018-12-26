define([
    "app",
    "register",
    "tools"
], function (app, register, ts) {
    "use strict";

    //const SERVICE = new WeakMap();

    var targetDummy = function () {
        function dummy(ajaxService) {
            ts.classCallCheck(this, dummy);

            this.restrict = "A";
            this.ajaxService = ajaxService;
            //SERVICE.set(this, ajaxService);
        }

        ts.createClass(dummy, [{
            key: "link",
            value: function link(scope, iElm, iAttr) {
                // SERVICE.get(Dummy.instance).log();
                this.ajaxService.log();
            }
        }], [{
            key: "$inject",
            get: function get() {
                return ["ajaxService"];
            }
        }]);

        return dummy;
    };

    register(app).directive("dummyDirective", targetDummy());
});
