require.def("sampleapp/controllers/indexcontroller",
    [
        "antie/class",
        "sampleapp/appui/widgets/frame"
    ],
    function(Class, Frame, DataSourceManager) {
        return Class.extend({

            init: function (args) {
                this._application = args.application;
                this._dataSourceManager = args.dataSourceManager;
            },

            index: function () {
                var self = this;
                var frame = new Frame('indexFrame')
                                .addComponentContainer('albumsContainer')
                                .addComponentContainer('albumPhotosContainer');
                
                frame.getComponentContainer('albumsContainer').addEventListener('databound', function() {
                    frame.setActiveChildWidget(frame.getComponentContainer('albumsContainer'));
                });
                frame.getComponentContainer('albumsContainer').addEventListener('select', function() {
                    var albumPhotosDataSource = self._dataSourceManager.get('albumphotos', { accessToken: self._application.getAccessToken() });
                    frame.showComponent('albumPhotosContainer', "sampleapp/appui/components/facebook/albumphotoscarouselcomponent", { dataSource: albumPhotosDataSource });
                });

                frame.getComponentContainer('albumPhotosContainer').addEventListener('databound', function() {
                    frame.setActiveChildWidget(frame.getComponentContainer('albumPhotosContainer'));
                });

                this._application._rootWidget.appendChildWidget(frame);

                var albumsDataSource = this._dataSourceManager.get('albums', { accessToken: this._application.getAccessToken() });
                frame.showComponent('albumsContainer', "sampleapp/appui/components/facebook/albumscarouselcomponent", { dataSource: albumsDataSource });
            }

        });
    }
);