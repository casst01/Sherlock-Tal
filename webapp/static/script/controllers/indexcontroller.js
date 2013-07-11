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
                frame.showComponent('topContainer', "sampleapp/appui/components/facebook/friendscarouselcomponent");
                this._application._rootWidget.appendChildWidget(frame);
            }

        });
    });