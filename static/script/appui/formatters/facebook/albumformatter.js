require.def("sampleapp/appui/formatters/facebook/albumformatter",
    [
        "antie/formatter",
        "sampleapp/appui/widgets/facebook/album"
    ],
    function(Formatter, Album) {
        return Formatter.extend({
            format : function (iterator) {
                console.log(iterator.peek());
                return new Album(iterator.next());
            }
        });
    }
);