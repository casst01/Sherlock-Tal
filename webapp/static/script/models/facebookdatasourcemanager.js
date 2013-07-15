require.def("sampleapp/models/facebookdatasourcemanager",
    [
        "sampleapp/models/datasourcemanager",
        "sampleapp/datasources/facebook/friends",
        "sampleapp/datasources/facebook/albums",
        "sampleapp/datasources/facebook/albumphotos"
    ],
    function(DataSourceManager, Friends, Albums, AlbumPhotos) {
        return DataSourceManager.extend({

            init: function(args) {
                this._super();
                this._accessToken = args.accessToken;

                this._addDataSourceClasses({
                    'friends': Friends,
                    'albums': Albums,
                    'albumphotos': AlbumPhotos
                });
            },

            _loadData : function(callbacks, dataSourceId) {
              var dataSource = this._dataSources[dataSourceId];    
              this._loadJSON(
                dataSource.getUrl() + "?access_token=" + this._accessToken.token, 
                callbacks.onSuccess
              );
            },

        });
    }
);