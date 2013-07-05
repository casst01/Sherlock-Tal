require.def("sampleapp/appui/widgets/friend",
    [
        "antie/widgets/button",
        "antie/widgets/label",
        "antie/widgets/image"
    ],
    function(Button, Label, Image) {
        return Button.extend({

            init : function (dataItem) {
                var id = 'friend-' + dataItem.id;
                this._super(id);
                this.setDataItem(dataItem);
                this.appendChildWidget(new Label(dataItem.name));
                this.appendChildWidget(new Image(id + 'photo', this._getProfileImageUrl(), { width:100, height: 100}));
            },

            _getProfileImageUrl: function () {
                return 'https://graph.facebook.com/' + this.getDataItem().id + '/picture?width=100';
            }
        });
    }
);