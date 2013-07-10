require.def("sampleapp/datasources/facebook/base",
    [
        "antie/class",
        "sampleapp/datasources/datasourcebase"
    ],
    function(Class, DatasourceBase) {
        return DatasourceBase.extend({

            _urlParamRegex: /(?::[A-Za-z]+)/g,

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
				return this.accessToken.token || '';
            },

            _getUrl: function () {
				return this.url || '';
            },

            _fillUrlParams: function (params) {
                var matches = null;
                while(matches = this._urlParamRegex.exec(this.url)) {
                    var paramName = matches[0];
                    var sanitizedParamName = paramName.replace(':', '');
                    if(params[sanitizedParamName]) {
                        this.url = this.url.replace(paramName, params[sanitizedParamName]);
                    }
                }
            }

        });
    }
);