require.def("sampleapp/appui/widgets/facebook/album",
    [
        "antie/widgets/button",
        "antie/widgets/label",
        "antie/widgets/image"
    ],
    function(Button, Label, Image) {
        return Button.extend({

            init : function (dataItem) {
                var id = dataItem.id;
                this._super(id);
                this.setDataItem(dataItem);
                this.addClass('album');
                this.appendChildWidget(new Label(dataItem.name));
                this.appendChildWidget(this._createCountLabel(dataItem));
            },

            _createCountLabel: function(dataItem) {
                var label = new Label('(' + dataItem.count + ')');
                label.addClass('count');
                return label;
            }

        });
    }
);