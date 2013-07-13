require.def("sampleapp/datasources/facebook/friends",
    [
        "antie/class",
        "sampleapp/datasources/facebook/base"
    ],
    function(Class, FacebookDataSourceBase) {
        return FacebookDataSourceBase.extend({

            url: 'https://graph.facebook.com/me/friends',

            init: function(args) {
                this._super(args.accessToken, this.url);
            }

        });
    }
);