require.def("sampleapp/controllers/indexcontroller",
    [
        "antie/class",
        "sampleapp/appui/widgets/frame"
    ],
    function(Class, Frame) {
        return Class.extend({

            init: function (application) {
                this._application = application;
            },

            index: function () {
                var self = this;
                var frame = new Frame('indexFrame')
                                .addComponentContainer('albumsContainer');
                
                frame.getComponentContainer('albumsContainer').addEventListener('databound', function() {
                    frame.setActiveChildWidget(frame.getComponentContainer('albumsContainer'));
                });

                this._application._rootWidget.appendChildWidget(frame);
                frame.showComponent('albumsContainer', "sampleapp/appui/components/facebook/albumscarouselcomponent");
            }
        });
    }
);