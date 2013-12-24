require.def("sampleapp/controllers/maincontroller",
    [
        "antie/class",
        "sampleapp/controllers/indexcontroller"
    ],
    function(Class, IndexController) {
        return Class.extend({

            init: function (args) {
                this._application = args.application;
                this._dataSourceManager = args.dataSourceManager;

                this._controllerClasses = {
                    'index' : IndexController
                };

                this._controllers = [];
            },

            route: function(route) {
                var route = this._sanitizeRoute(route);
                var controller = this._instantiateController(route.controller);
                controller[route.action].apply(controller, []);
            },

            _instantiateController: function (name) {
                if(!this._controllers[name]) {
                    var ControllerClass = this._controllerClasses[name];
                    var args = {
                        application: this._application,
                        dataSourceManager: this._dataSourceManager
                    }
                    this._controllers[name] = new ControllerClass(args);
                }
                return this._controllers[name];
            },

            _sanitizeRoute: function (route) {
                var params = route;
                if(route.length <= 0 || route[0] === '') {
                    params = ['index', 'index'];
                }

                return {
                    'controller' : params[0],
                    'action': params[1]
                }
            }

        });
    });