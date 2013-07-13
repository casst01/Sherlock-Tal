require.def("sampleapp/appui/formatters/facebook/albumphotoformatter",
    [
        "antie/formatter",
        "sampleapp/appui/widgets/facebook/albumphoto"
    ],
    function(Formatter, AlbumPhoto) {
        return Formatter.extend({
            format : function (iterator) {
                return new AlbumPhoto(iterator.next());
            }
        });
    }
);