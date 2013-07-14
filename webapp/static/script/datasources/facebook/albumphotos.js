require.def("sampleapp/datasources/facebook/albumphotos",
    [
        "antie/class",
        "sampleapp/datasources/facebook/base"
    ],
    function(Class, FacebookDataSourceBase) {
        return FacebookDataSourceBase.extend({

            url: 'https://graph.facebook.com/:albumId/photos',

            init: function(component, obj, func, args) {
                this._super(component, obj, func, args, 'albumphotos');
                this._albumId = '';
            },

            setAlbumId: function(albumId) {
                this._albumId = albumId;
            },

            getUrl: function () {
                this._fillUrlParams({
                    albumId: this._albumId
                })
                return this.url;
            }

        });
    }
);