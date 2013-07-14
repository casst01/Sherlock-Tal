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

                    dataSource = new DataSourceClass(
                        component, this, "_loadData", args
                    );

                    this._dataSources[dataSourceId] = dataSource;

                    return dataSource;
                }
                else {
                    return null;
                }
            },

            _loadData : function(callbacks, dataSourceId) {
              var dataSource = this._dataSources[dataSourceId];    
              this._loadJSON(dataSource.getUrl(), callbacks.onSuccess);
            },

            _loadJSON: function(url, callback) {
                this._xhrRequest(url, function(xhr){
                  var json = JSON.parse(xhr.response);
                  callback(json.data);
                });
            },

            _xhrRequest: function(url, callback) {
                xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {  
                  if((xhr.readyState < 4) || xhr.status !== 200) return;  
                  callback(xhr);  
                };  
              
                xhr.open('GET', url, true);  
                xhr.send(''); 
            }

        });
    }
);