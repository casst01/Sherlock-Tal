require.def("sampleapp/controllers/maincontroller",
    [
        "antie/class",
        "sampleapp/controllers/indexcontroller"
    ],
    function(Class, IndexController) {
        return Class.extend({

            init: function (application) {
                this._application = application;

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
                    this._controllers[name] = new ControllerClass(this._application);
                }
                return this._controllers[name];
            },

            _sanitizeRoute: function (route) {
                var params = route;
                if(route.length <= 0) {
                    params = ['index', 'index'];
                }

                return {
                    'controller' : params[0],
                    'action': params[1]
                }
            }

        });
    });