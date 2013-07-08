require.def("sampleapp/controllers/maincontroller",
    [
        "antie/class",
    ],
    function(Class) {
        return Class.extend({

            init: function (application) {
                this._application = application;
            },

            route: function(route) {
                var route = this._sanitizeRoute(route);
                var queryParams = this._getQueryParams();
                this.index();
            },

            index: function () {
                this._application.addComponentContainer("maincontainer", "sampleapp/appui/components/facebook/friendscarouselcomponent");
                // this._application.addComponentContainer("albumscontainer", "sampleapp/appui/components/facebook/albumscarouselcomponent");
            },

            _sanitizeRoute: function (route) {
                if(route.length <= 0) {
                    return ['index', 'index'];
                } else {
                    return route;
                }
            },

            _getQueryParams: function () {
                return {
                    "id" : "12345"
                };
            }

        });
    });