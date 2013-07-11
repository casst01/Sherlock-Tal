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
                var frame = new Frame('indexFrame');
                frame.addComponentContainer('topContainer');
                frame.addComponentContainer('bottomContainer');
                frame.showComponent('topContainer', "sampleapp/appui/components/facebook/friendscarouselcomponent");
                this._application._rootWidget.appendChildWidget(frame);

                var self = this;
                frame.getComponentContainer('topContainer').addEventListener('databound', function() {
                    self._application._rootWidget.setActiveChildWidget(frame.getComponentContainer('topContainer'));
                });
                frame.getComponentContainer('topContainer').addEventListener('select', function() {
                    frame.showComponent('bottomContainer', "sampleapp/appui/components/facebook/albumscarouselcomponent");
                });
            }

        });
    });