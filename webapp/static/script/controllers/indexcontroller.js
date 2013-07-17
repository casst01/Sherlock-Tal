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

                frame.getAlbumsContainer().addEventListener('databound', function() {
                    frame.setActiveChildWidget(frame.getAlbumsContainer());
                });

                var albumsDataSource = this._dataSourceManager.get('friends');
                frame.getAlbumsContainer().show("sampleapp/appui/components/facebook/friendscarouselcomponent", { dataSource: albumsDataSource });
            }

        });
    }
);