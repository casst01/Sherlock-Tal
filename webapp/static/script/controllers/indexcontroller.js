require.def("sampleapp/controllers/indexcontroller",
    [
        "antie/class",
        "sampleapp/appui/frames/indexframe"
    ],
    function(Class, IndexFrame) {
        return Class.extend({

            init: function (args) {
                this._application = args.application;
                this._dataSourceManager = args.dataSourceManager;
            },

            index: function () {
                var self = this;
                var frame = new IndexFrame();
                
                this._application._rootWidget.appendChildWidget(frame);
                var ds = this._dataSourceManager.get('sample');
                frame.getSampleContainer().show("sampleapp/appui/components/samplecarouselcomponent", { dataSource: ds });
            }

        });
    }
);