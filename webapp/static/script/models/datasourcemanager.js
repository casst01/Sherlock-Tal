require.def("sampleapp/models/datasourcemanager",
    [
        "antie/class",
        "antie/datasource"
    ],
    function(Class, DataSource) {
        return Class.extend({

            init: function() {
                this._dataSourceClasses = {};
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
              if(dataSource.useMock) {
                callbacks.onSuccess(dataSource.mockData);
              } else {
                this._loadJSON(dataSource.getUrl(),callbacks.onSuccess);
              }
            },

            _xhrRequest: function(url, callback) {
                xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {  
                  if((xhr.readyState < 4) || xhr.status !== 200) return;  
                  callback(xhr);  
                };  
              
                xhr.open('GET', url, true);  
                xhr.send(''); 
            },

            _loadJSON: function(url, callback) {
              this._xhrRequest(url, function(xhr){
                var json = JSON.parse(xhr.response);
                json.id = "" + json.id;
                json = [json]
                callback(json);
              });
            },

            _addDataSourceClasses: function(classes) {
                for(var key in classes) {
                    this._dataSourceClasses[key] = classes[key];
                }
            }

        });
    }
);