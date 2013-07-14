require.def("sampleapp/datasources/facebook/base",
    [
        "antie/class",
        "sampleapp/datasources/datasourcebase"
    ],
    function(Class, DatasourceBase) {
        return DatasourceBase.extend({

            _urlParamRegex: /(?::[A-Za-z]+)/g,

            init: function(component, obj, func, args, dataSourceId) {
                this._super(component, obj, func, args, dataSourceId);
            },

            getUrl: function () {
                return this.url;
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