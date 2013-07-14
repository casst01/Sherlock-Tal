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
                
                frame.getAlbumsContainer().addEventListener('databound', function() {
                    frame.setActiveChildWidget(frame.getAlbumsContainer());
                });

                frame.getAlbumsContainer().addEventListener('select', function(evt) {
                    var albumPhotosDataSource = self._dataSourceManager.get('albumphotos');
                    albumPhotosDataSource.setAlbumId(evt.target.id);
                    frame.getAlbumPhotosContainer().show("sampleapp/appui/components/facebook/albumphotoscarouselcomponent", { dataSource: albumPhotosDataSource });
                });

                frame.getAlbumPhotosContainer().addEventListener('databound', function() {
                    frame.setActiveChildWidget(frame.getAlbumPhotosContainer('albumPhotosContainer'));
                });

                this._application._rootWidget.appendChildWidget(frame);

                var albumsDataSource = this._dataSourceManager.get('albums');
                frame.getAlbumsContainer().show("sampleapp/appui/components/facebook/albumscarouselcomponent", { dataSource: albumsDataSource });
            }

        });
    }
);