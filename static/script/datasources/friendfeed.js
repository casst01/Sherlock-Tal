require.def("sampleapp/datasources/friendfeed",
    [
        "antie/class",
        "sampleapp/datasources/facebookdatasource"
    ],
    function(Class, FacebookDataSource) {
        return FacebookDataSource.extend({

            url: 'https://graph.facebook.com/me/friends',

            init: function(accessToken) {
                this._super(accessToken, this.url);
            }

        });
    }
);