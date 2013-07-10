require.def("sampleapp/datasources/facebook/albums",
    [
        "antie/class",
        "sampleapp/datasources/facebook/base"
    ],
    function(Class, FacebookDataSourceBase) {
        return FacebookDataSourceBase.extend({

            url: 'https://graph.facebook.com/me/albums',

            init: function(accessToken) {
                this._super(accessToken, this.url);
            }

        });
    }
);