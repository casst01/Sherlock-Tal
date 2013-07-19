require.def("sampleapp/datasources/facebook/friends",
    [
        "antie/class",
        "sampleapp/datasources/datasourcebase"
    ],
    function(Class, DataSourceBase) {
        return DataSourceBase.extend({

            url: 'https://graph.facebook.com/me/friends',

            init: function(component, obj, func, args) {
                this._super(component, obj, func, args, 'friends');
            }

        });
    }
);