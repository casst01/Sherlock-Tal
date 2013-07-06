require.def("sampleapp/datasources/facebookdatasource",
    [
        "antie/class",
        "sampleapp/datasources/datasourcebase"
    ],
    function(Class, DatasourceBase) {
        return DatasourceBase.extend({

            init: function(accessToken, url) {
				this.accessToken = accessToken;
				this.url = url;
            },

            loadData : function(callbacks) {
              this.loadJSON(
                this._getUrl() + '?access_token=' + this._getAccessToken(),
                callbacks.onSuccess
              );
            },

            _getAccessToken: function () {
				return this.accessToken || '';
            },

            _getUrl: function () {
				return this.url || '';
            }

        });
    }
);