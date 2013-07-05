require.def("sampleapp/appui/formatters/friendformatter",
    [
        "antie/formatter",
        "sampleapp/appui/widgets/friend"
    ],
    function(Formatter, Friend) {
        return Formatter.extend({
            format : function (iterator) {
                return new Friend(iterator.next());
            }
        });
    }
);