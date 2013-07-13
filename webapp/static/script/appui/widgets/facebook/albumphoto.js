require.def("sampleapp/appui/widgets/facebook/albumphoto",
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
                this.addClass('albumphoto');
                this.appendChildWidget(new Image(id + 'photo', this._getPhotoUrl(), { width:300, height: 300}));
            },

            _getPhotoUrl: function () {
                return this.getDataItem().source;
            }
        });
    }
);