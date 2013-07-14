require.def("sampleapp/datasources/facebook/albumphotos",
    [
        "antie/class",
        "sampleapp/datasources/facebook/base"
    ],
    function(Class, FacebookDataSourceBase) {
        return FacebookDataSourceBase.extend({

            url: 'https://graph.facebook.com/18812320576/photos',

            init: function(component, obj, func, args) {
                this._super(component, obj, func, args, 'albumphotos');
            },

            setAlbumId: function(albumId) {
                this._albumId = albumId;
            }

        });
    }
);