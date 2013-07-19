require.def("sampleapp/datasources/datasourcebase",
    [
        "antie/datasource"
    ],
    function(DataSource) {
        return DataSource.extend({

            _urlParamRegex: /(?::[A-Za-z]+)/g,

            init: function(component, obj, func, args, dataSourceId) {
                args = args || [];
                this._super(component, obj, func, args.concat([dataSourceId]));
            },

            getUrl: function () {
                return this.url;
            },

            _fillUrlParams: function (url, params) {
                var matches = null;
                while(matches = this._urlParamRegex.exec(url)) {
                    var paramName = matches[0];
                    var sanitizedParamName = paramName.replace(':', '');
                    if(params[sanitizedParamName]) {
                        url = url.replace(paramName, params[sanitizedParamName]);
                    }
                }
                return url;
            }

        });
    });