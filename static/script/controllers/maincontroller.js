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
                var controller = this._instantiateController(route[0]);
                controller.index();
            },

            _instantiateController: function (name) {
                if(!this._controllers[name]) {
                    var ControllerClass = this._controllerClasses[name];
                    this._controllers[name] = new ControllerClass(this._application);
                }
                return this._controllers[name];
            },

            _sanitizeRoute: function (route) {
                if(route.length <= 0) {
                    return ['index', 'index'];
                } else {
                    return route;
                }
            }

        });
    });