require.def("sampleapp/controllers/indexcontroller",
    [
        "antie/class",
    ],
    function(Class) {
        return Class.extend({

            init: function (application) {
                this._application = application;
            },

            index: function(route) {
                this._topContainer = this._application.addComponentContainer("topContainer");
                this._topContainer.show("sampleapp/appui/components/facebook/friendscarouselcomponent");
            }

        });
    });