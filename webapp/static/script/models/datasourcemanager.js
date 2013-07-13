require.def("sampleapp/models/datasourcemanager",
    [
        "antie/class",
        "antie/datasource",
        "sampleapp/datasources/facebook/friends",
        "sampleapp/datasources/facebook/albums",
        "sampleapp/datasources/facebook/albumphotos"
    ],
    function(Class, DataSource, Friends, Albums, AlbumPhotos) {
        return Class.extend({

            init: function() {
                this._dataSourceClasses = {
                    'friends': Friends,
                    'albums': Albums,
                    'albumphotos': AlbumPhotos
                };
                this._dataSources = [];
            },

            get: function (dataSourceId, args, component) {
                var dataSource = this._dataSources[dataSourceId];

                if (dataSource) {
                    return dataSource;
                }

                var DataSourceClass = this._dataSourceClasses[dataSourceId];
                if (DataSourceClass) {
                    
                    var dataSourceObject = new DataSourceClass(args || {});
                    dataSource = new DataSource(
                        component, dataSourceObject, "loadData"
                    );

                    this._dataSources[dataSourceId] = dataSource;

                    return dataSource;
                }
                else {
                    return null;
                }
            }

        });
    }
);