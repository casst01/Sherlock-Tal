require.def("sampleapp/appui/widgets/facebook/album",
    [
        "antie/widgets/button",
        "antie/widgets/label",
        "antie/widgets/image"
    ],
    function(Button, Label, Image) {
        return Button.extend({

            init : function (dataItem) {
                var id = 'album-' + dataItem.id;
                this._super(id);
                this.setDataItem(dataItem);
                this.appendChildWidget(new Label(dataItem.name));
                this.appendChildWidget(new Image(id + 'photo', this._getCoverPhotoUrl(), { width:100, height: 100}));
            },

            _getCoverPhotoUrl: function () {
                return 'https://graph.facebook.com/' + this.getDataItem().cover_photo + '/picture?width=100';
            }
        });
    }
);