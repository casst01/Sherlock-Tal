require.def("sampleapp/datasources/facebook/albums",
    [
        "antie/class",
        "sampleapp/datasources/facebook/base"
    ],
    function(Class, FacebookDataSourceBase) {
        return FacebookDataSourceBase.extend({

            url: 'https://graph.facebook.com/me/albums',

            init: function(args) {
                this._super(args.accessToken, this.url);
            }

        });
    }
);