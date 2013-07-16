require.def("sampleapp/appui/widgets/facebook/friend",
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
                this.addClass('friend');
                this.appendChildWidget(new Image(id + 'photo', this._getProfileImageUrl(), { height: 75 }));
                this.appendChildWidget(new Label(dataItem.name));
            },

            _getProfileImageUrl: function () {
                return 'https://graph.facebook.com/' + this.getDataItem().id + '/picture?type=square';
            }
        });
    }
);