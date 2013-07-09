require.def("sampleapp/appui/formatters/facebook/friendformatter",
    [
        "antie/formatter",
        "sampleapp/appui/widgets/facebook/friend"
    ],
    function(Formatter, Friend) {
        return Formatter.extend({
            format : function (iterator) {
                return new Friend(iterator.next());
            }
        });
    }
);