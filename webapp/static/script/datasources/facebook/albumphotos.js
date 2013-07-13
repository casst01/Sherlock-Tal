require.def("sampleapp/datasources/facebook/albumphotos",
    [
        "antie/class",
        "sampleapp/datasources/facebook/base"
    ],
    function(Class, FacebookDataSourceBase) {
        return FacebookDataSourceBase.extend({

            url: 'https://graph.facebook.com/18812320576/photos',

            init: function(accessToken) {
                this._super(accessToken, this.url);
                this._albumId = null;
            },

            setAlbumId: function(albumId) {
                this._albumId = albumId;
            }

            // loadData: function(callbacks) {
            //     this._fillUrlParams({
            //         albumId: this._albumId
            //     });
            //     this._super(callbacks);
            // }

        });
    }
);