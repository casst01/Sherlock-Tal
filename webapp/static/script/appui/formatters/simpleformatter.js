require.def("sampleapp/appui/formatters/simpleformatter",
    [
        "antie/formatter",
        "antie/widgets/label",
        "antie/widgets/button"
    ],
    function(Formatter, Label, Button) {
        return Formatter.extend({
            format : function (iterator) {
                var button, item;
                item = iterator.next();
                button = new Button("fruit" + item.id);
                button.appendChildWidget(new Label(item.title));
                return button;
            }
        });
    }
);