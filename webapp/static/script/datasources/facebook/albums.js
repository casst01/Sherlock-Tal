require.def("sampleapp/datasources/facebook/albums",
    [
        "antie/class",
        "sampleapp/datasources/datasourcebase"
    ],
    function(Class, DataSourceBase) {
        return DataSourceBase.extend({

            url: 'https://graph.facebook.com/me/albums',

            init: function(component, obj, func, args) {
                this._super(component, obj, func, args, 'albums');
            }

        });
    }
);