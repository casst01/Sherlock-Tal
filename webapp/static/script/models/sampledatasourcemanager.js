require.def("sampleapp/models/sampledatasourcemanager",
  [
      "sampleapp/models/datasourcemanager",
      "sampleapp/datasources/sampledatasource"
  ],
  function(DataSourceManager, SampleDataSource) {
      return DataSourceManager.extend({

          init: function(args) {
              this._super();

              this._addDataSourceClasses({
                  'sample': SampleDataSource
              });
          },

          _loadData : function(callbacks, dataSourceId) {
              var dataSource = this._dataSources[dataSourceId];
              if(dataSource.useMock) {
                callbacks.onSuccess(dataSource.mockData);
              } else {
                this._loadJSON(
                  dataSource.getUrl(),
                  callbacks.onSuccess
                );
              }
          },

          _loadJSON: function(url, callback) {
              this._xhrRequest(url, function(xhr){
                  var json = JSON.parse(xhr.response);
                  callback(json.data);
              });
          }

      });
  }
);