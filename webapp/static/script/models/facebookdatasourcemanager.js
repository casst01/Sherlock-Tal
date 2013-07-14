require.def("sampleapp/models/facebookdatasourcemanager",
    [
        "sampleapp/models/datasourcemanager"
    ],
    function(DataSourceManager) {
        return DataSourceManager.extend({

            init: function(args) {
                this._super();
                this._accessToken = args.accessToken;
            },

            _loadData : function(callbacks, dataSourceId) {
              var dataSource = this._dataSources[dataSourceId];    
              this._loadJSON(
                dataSource.url + "?access_token=" + this._accessToken.token, 
                callbacks.onSuccess
              );
            },

        });
    }
);